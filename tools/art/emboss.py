from PIL import Image,ImageFilter
import numpy as np
W,H=1080,1920
hm=np.zeros((H,W),np.float32)
def place(f,h,rot,flip,x,y):
    i=Image.open(f+'.png'); i=i.resize((int(i.width*h/i.height),h),Image.LANCZOS)
    if flip:i=i.transpose(Image.FLIP_LEFT_RIGHT)
    i=i.rotate(rot,expand=True,resample=Image.BICUBIC)
    a=np.asarray(i).astype(np.float32); al=a[...,3]/255; lum=a[...,:3].mean(-1)/255
    det=np.asarray(Image.fromarray((lum*255).astype(np.uint8)).filter(ImageFilter.FIND_EDGES)).astype(np.float32)/255
    hh=al*0.8 - det*al*0.9
    x0,y0=int(x-i.width/2),int(y-i.height/2)
    sx0,sy0=max(0,-x0),max(0,-y0); x0c,y0c=max(0,x0),max(0,y0)
    x1,y1=min(W,x0+i.width),min(H,y0+i.height)
    hm[y0c:y1,x0c:x1]=np.maximum(hm[y0c:y1,x0c:x1],hh[sy0:sy0+y1-y0c,sx0:sx0+x1-x0c])
place('f02',900,-30,False,200,420)
place('f08',640,35,True,880,300)
place('f05',820,150,False,220,1560)
place('f09',860,-160,True,880,1560)
place('f07',520,95,True,1010,950)
place('f06',560,-95,False,60,980)
h=np.asarray(Image.fromarray(np.clip(hm*255,0,255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.3))).astype(np.float32)/255
gy,gx=np.gradient(h); s=12.0
nx,ny,nz=-gx*s,-gy*s,np.ones_like(h); n=np.sqrt(nx**2+ny**2+nz**2); nx/=n;ny/=n;nz/=n
L=np.array([-0.55,-0.6,0.58]); L/=np.linalg.norm(L)
shade=nx*L[0]+ny*L[1]+nz*L[2]-L[2]
rng=np.random.default_rng(7)
noise=np.asarray(Image.fromarray((rng.random((H,W))*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))).astype(np.float32)/255-0.5
fib=np.asarray(Image.fromarray((rng.random((H//4,W//4))*255).astype(np.uint8)).resize((W,H),Image.BICUBIC).filter(ImageFilter.GaussianBlur(2))).astype(np.float32)/255-0.5
base=np.array([96,23,38],np.float32)
yy,xx=np.mgrid[0:H,0:W]
vign=1-0.2*(((xx-W*0.45)/W)**2+((yy-H*0.4)/H)**2)*2
k=(1+shade*1.5)*vign*(1+noise*0.07+fib*0.05)*(1-0.04*h)
img=np.clip(base*k[...,None],0,255).astype(np.uint8)
Image.fromarray(img).save('../../public/img/envelope-emboss.webp',quality=72,method=6)
Image.fromarray(img).resize((W//2,H//2)).save('env-prev.jpg')
