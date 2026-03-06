num=[2,7,11,15]
target=9

for i in range(0,len(num)):
    for j in range(0,len(num)):
       if num[i]==num[j]:
          pass
       elif num[i]+num[j]==target:
          l=[i,j]
          break        
       else:
            pass
print(l)