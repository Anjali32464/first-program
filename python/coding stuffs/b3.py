import pickle
z="f"
f=open("C:\\Users\\hp\\Desktop\\h.dat","rb+")
while True:
    try:
        y=f.tell()
        x=pickle.load(f)
        if x[0]==1:
            x[1]="fff"
            f.seek(y)
            pickle.dump(x,f)
            z="t"
    except:
        break
if z=="f":
    print("sowwy")
else:
    print("done")
f.close()