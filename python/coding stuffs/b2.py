import pickle
f=open("C:\\Users\\hp\\Desktop\\h.dat","rb")
while True:
    try:
        x=pickle.load(f)
        print(x)
    except:
        break
f.close()