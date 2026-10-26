from PIL import Image,ImageFilter,ImageDraw
import numpy as np
rng=np.random.default_rng(3)
def tile_blur(a,r):
    S=a.shape[0]; t=np.tile(a,(3,3)); b=np.asarray(Image.fromarray(t).filter(ImageFilter.GaussianBlur(r))); return b[S:2*S,S:2*S]
def paper(S,base,amp,name):
    n1=tile_blur((rng.random((S,S))*255).astype(np.uint8),0.6).astype(np.float32)/255-.5
    lf=tile_blur((rng.random((S,S))*255).astype(np.uint8),18).astype(np.float32)/255-.5; lf/=lf.std()*6
    fib=Image.new('L',(S,S),128); d=ImageDraw.Draw(fib)
    for _ in range(S):
        x,y=rng.random(2)*S; a=rng.random()*np.pi; l=4+rng.random()*16; c=int(128+(rng.random()-.5)*50)
        for ox in (-S,0,S):
            for oy in (-S,0,S): d.line([(x+ox,y+oy),(x+ox+np.cos(a)*l,y+oy+np.sin(a)*l)],fill=c,width=1)
    fib=tile_blur(np.asarray(fib),0.5).astype(np.float32)/255-.5
    speck=(rng.random((S,S))>0.9995)*-0.5
    k=1+n1*amp[0]+lf*amp[1]+fib*amp[2]+speck*amp[3]
    Image.fromarray(np.clip(np.array(base,np.float32)*k[...,None],0,255).astype(np.uint8)).save(name+'.webp',quality=88,method=6)
paper(400,(246,241,232),(0.05,0.05,0.07,0.3),'paper-cream')
paper(400,(92,21,36),(0.09,0.08,0.10,0),'paper-burgundy')
paper(400,(36,47,80),(0.09,0.08,0.10,0),'paper-navy')
paper(400,(214,212,209),(0.05,0.06,0.05,0),'paper-grey')
paper(400,(128,128,128),(0.35,0.25,0.4,0),'paper-grain')
