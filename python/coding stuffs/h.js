let mynumber = 6
let b=" "
for (i = mynumber; i > 0; i=i-1) {
  if (i % 2 === 0) {
    
    b = b +"0";
  }
  else {  
    b = b +"1";
  }
}
console.log(b)
