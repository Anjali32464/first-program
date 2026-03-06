// console.log("hi world it changed");
// console.warn("don't let them know");
// console.error("error here");

//variables
// var r={R:89,v:90,c:95};    //datatype-- object
// console.log(r)
// var x=30;
// var b=20;
//console.log(x+b); 
// var rr=[10,20,30,40];    // -- Array
//console.log(rr)
//console.log(rr[0])
/*
document.getElementsByTagName(hi)[0].style.backgroung="skyblue";
document.getElementsByTagName(hi)[0].style.fontsize="26px "
document.getElementById("click").click()
*/



/*
console.log(true && false);
console.log(true || false);
console.log(!true);
*/

/*
function sum(a,b){ return (a+b);}
c=sum(10,20)                                                       // Function
console.log(c)
*/


// Arrow function
// sub=(a,b)=>{
//     return a-b
// }


/*
var age=50;
if (age>50){
    console.log(" above 50 ")
}
else if(age<50){                                                 // if else condition
    console.log(" below 50 ")
}
else{
    console.log("no idea")
}
*/





//Loop--

// var a=[10,20,30,40,50,60];
// for(var i=0;i<a.length;i++){
//     if(i==2){
//         // break;
//         continue;
    
//     }
//     console.log(a[i])                                                     //Loop 1
// }


// var arr=[1,3,5,7,9];



/*
arr.foreach(function(element){
    console.log(element)
})                                                              //Loop 2
    */

// let y=0;
// while(y<arr.length){
//     console.log(arr[y]);                                        //Loop 3
//     y++
// }
// const z=0;  (constant)
  


// let arr=["hi","hello",1,4,null,true];
// console.log(arr)
// console.log(arr.length)
// arr.pop();    //removes the last element
// console.log(arr);                                                                  // Array functions
// arr.shift() //removes the 1st element
// console.log(arr)
// const a= arr.unshift(1000);  //adds the element at the starting
// console.log(a);
// console.log(arr);
// arr.sort();  // it will short the numbers acc to dictionary



let str="i am not sure right now not at all"
// console.log(str.length)
// console.log(str.indexOf("i"))
// console.log(str.lastIndexOf("i"))   // gives the index of last element asked         //String functions
//console.log(str.slice(0,6))  // print elements form 1 to 6 index excluding 6
// newstr= str.replace("not","absolutely");
// console.log(newstr)



// let date=new Date()
// console.log(date)
// console.log(date.getTime())
// console.log(date.getFullYear())
// console.log(date.getDay())



// DOM manuplation
let elm=document.getElementById("click");
//console.log(elm);
let eClass=document.getElementsByClassName("container");
//console.log(eClass);
//eClass[1].style.background="green";
eClass[0].classList.add("newclass");
eClass[1].classList.add("nclass");                 //To add new class 
//eClass[1].classList.remove("nclass")                 //To remove new class 
// console.log(elm.innerHTML);
//  console.log(eClass[1].innerText);

t=document.getElementsByTagName("button");
tt=document.getElementsByTagName("div");
// console.log(t);
// console.log(tt);
createdElement= document.createElement("p");
createdElement.innerText = "Created text from coding";
tt[0].appendChild(createdElement);
createdElement2=document.createElement("b")
createdElement2.innerText="Bold style "
tt[0].replaceChild(createdElement2,createdElement);
//removeChild(element);  //removingg it

s=document.querySelector(".container")
console.log(s)


function clicked(){
    console.log("Thanko")
 }                                                                                  // kisi ciz se koi aur kaam link krna jaise click krne se kya ho 

// FirstContainer.addEventListener("click",function(){
//     document.querySelectorAll(".container")[1].innerHTML="<b> Click karne ka natiza</b>"
//     console.log("Clicked on container")
// })
FirstContainer.addEventListener("mouseover",function(){            // "mouseout" : 
    console.log("Mouse on container")                              // "mouseup" : db area pr mouse se dabate ho
})                                                                 //" mousedown" : jb area se dabaya hua mouse chorte to



// Set time out and set interval
logging=()=>{
    console.log("after 2 sec this is what will happen")
}
// setTimeout(logging,8000);                          // first give the function to be followed and the 2nd thing is after what time in milisec
// setInterval(logging,8000);                          // this will repeat the function after the given mlisec
 // if you wnt to stop this interval or timeout store it in variable(stop) and write clearInterval(stop) or clearTimeout(stop) in the console


 

