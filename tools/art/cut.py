import sys,numpy as np
from PIL import Image,ImageFilter
from scipy import ndimage as nd
src,out=sys.argv[1],sys.argv[2]
im=Image.open(src).convert('RGB')
W,H=im.size
im=im.crop((int(W*.04),int(H*.03),int(W*.96),int(H*.80)))
a=np.asarray(im).astype(np.float32)
# paper: smooth estimate from heavy median of the image downscaled (plants are thin)
small=im.resize((60,int(60*im.height/im.width)),Image.BILINEAR)
bgs=small.filter(ImageFilter.MaxFilter(7)).filter(ImageFilter.GaussianBlur(3))
bg=np.asarray(bgs.resize(im.size,Image.BICUBIC)).astype(np.float32)
lum=a.mean(-1); blum=bg.mean(-1)
dark=np.clip(blum-lum,0,None)
sat=a.max(-1)-a.min(-1); bsat=bg.max(-1)-bg.min(-1)
score=np.maximum(dark*1.2,(sat-bsat)*1.5)
alpha=np.clip((score-22)/40,0,1)
core=nd.binary_opening(alpha>0.5,iterations=2)
lab,n=nd.label(core); sizes=nd.sum(core,lab,range(1,n+1))
keep=np.isin(lab,1+np.where(sizes>800)[0])
keep=nd.binary_dilation(keep,iterations=6)
keep=nd.binary_fill_holes(keep)
alpha=alpha*keep
alpha=np.asarray(Image.fromarray((alpha*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))).astype(np.float32)/255
# fill interiors: inside solid regions keep fully opaque
al=alpha[...,None]
rgb=np.clip(np.where(al>0.05,(a-bg*(1-al))/np.maximum(al,0.05),a),0,255)
o=Image.fromarray(np.dstack([rgb,alpha*255]).astype(np.uint8))
o=o.crop(o.getchannel('A').point(lambda v:255 if v>60 else 0).getbbox())
o.save(out);print(out,o.size)
