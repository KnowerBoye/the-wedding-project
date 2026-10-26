# Shifts the violet morning-glory blooms of f10.png (Redouté, CC0) to navy / dusty blue -> f10n.png.
import numpy as np
from PIL import Image
im = Image.open('f10.png'); a = np.asarray(im).astype(np.float32)
rgb = a[..., :3] / 255
hsv = np.asarray(Image.fromarray((rgb * 255).astype(np.uint8)).convert('HSV')).astype(np.float32)
h = hsv[..., 0] * 360 / 255; s = hsv[..., 1] / 255; v = hsv[..., 2] / 255
petal = ((h > 200) & (h < 345) & (s > 0.08)) | ((h < 15) & (s > 0.12) & (v < 0.6))
h2 = np.where(petal, 224.0, h)
s2 = np.where(petal, np.clip(s * 1.7 + 0.22, 0, 0.82), s)
v2 = np.where(petal, v * 0.72, v)
hsv2 = np.dstack([h2 * 255 / 360, s2 * 255, v2 * 255]).astype(np.uint8)
out = np.asarray(Image.fromarray(hsv2, 'HSV').convert('RGB'))
Image.fromarray(np.dstack([out, a[..., 3].astype(np.uint8)])).save('f10n.png')
