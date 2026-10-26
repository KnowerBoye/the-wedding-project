# Composes the floral seam/corner WebPs from the cut-out Redouté plates (fNN.png, made by cut.py).
# Run from a folder holding f02 f05 f06 f07 f08 f09 .png; writes to ../../public/img (adjust OUT).
from PIL import Image, ImageEnhance
import numpy as np
OUT = '../../public/img/'

def load(f, h, rot=0, flip=False):
    name = f
    i = Image.open(f + '.png')
    i = i.resize((int(i.width * h / i.height), h), Image.LANCZOS)
    a = np.asarray(i).copy(); H, W = a.shape[:2]; f = 60
    ramp = np.ones((H, W))
    for k in range(f):  # feather the plate's crop edges so stems don't end in straight cuts
        v = k / f
        ramp[H-1-k, :] = np.minimum(ramp[H-1-k, :], v); ramp[:, k] = np.minimum(ramp[:, k], v); ramp[:, W-1-k] = np.minimum(ramp[:, W-1-k], v)
    a[..., 3] = (a[..., 3] * ramp).astype(np.uint8); i = Image.fromarray(a)
    if flip: i = i.transpose(Image.FLIP_LEFT_RIGHT)
    if rot: i = i.rotate(rot, expand=True, resample=Image.BICUBIC)
    rgb = ImageEnhance.Color(i.convert('RGB')).enhance(1.0 if name == 'f10n' else 0.82); rgb.putalpha(i.getchannel('A'))
    return rgb

def comp(W, H, items, name, ow):
    c = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    for f, h, rot, flip, x, y in items:
        s = load(f, h, rot, flip); c.alpha_composite(s, (int(x - s.width / 2), int(y - s.height / 2)))
    c = c.crop(c.getbbox()); c = c.resize((ow, int(c.height * ow / c.width)), Image.LANCZOS)
    c.save(f'{OUT}{name}.webp', quality=66, method=6, alpha_quality=80)

comp(1800, 700, [('f05', 760, -75, False, 520, 330), ('f02', 820, 72, True, 1290, 320), ('f08', 560, -100, False, 740, 360), ('f07', 520, 95, True, 1080, 380), ('f10n', 560, -70, False, 900, 350)], 'floral-seam-a', 900)
comp(1800, 700, [('f06', 700, -80, False, 520, 360), ('f09', 720, 78, True, 1260, 330), ('f08', 520, 90, True, 1000, 350), ('f05', 520, -95, False, 720, 380), ('f10n', 520, 75, True, 860, 340)], 'floral-seam-b', 900)
