import random
r=["hello","games","play","study","group"]
word=random.choice(r)
guess=["_"]*len(word)
print(word)
i=9
y=0
while i>0:
    print("Current word: ", " ".join(guess))
    x=input("Enter you character: ")
    if x in word:
        for j in range(0,len(word)):
            if word[j]==x:
                guess[j]=x
        print("Great Guess! ")
        print("guessed word:",word)
        print()
                
    else:
        i=i-1           
        print("Bad Luck!")
        print("Chances left: ",i)
        print()
    if "_" not in guess:
        print("Congrats! ")
        break
else:
    print("Out of Chances ")
    print("The word was:",word)
