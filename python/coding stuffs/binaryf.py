import pickle
f=open("C:\\Users\\hp\\Desktop\\h.dat","wb")   

for i in range(3):
    a=int(input ("enter the roll no :"))
    b=input("enter the name :")
    pickle.dump([a,b],f)

f.close()
