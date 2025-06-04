//***************************************  JAVASCRIPT Dynamically typed lang ********************************* */
//Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime 
// based on the variable's value at the time.



// how data is stored in memory and the way to access those data
// on the basis of these it is categorised into two types
/*
1) Primitive -7 (call by value, ..data copied) +++not original value changed
number
bigInt
string
boolean
null  -- empty
undefined --variable declared. .. memory space declared but value not 
symbol -- to make a value UNIQUE



2) Non Primitive or Refrence type. +++ take refrence so og value changed
Array
Objects
functions



// const id=Symbol('123')
// const anotherid=Symbol('123')
// console.log(id === anotherid);

const heros=["apple","banana","cherry"]; //array

let myObj={
    name: "Raj",
    age: 22
}//object




const myFunc=function(){
    console.log("Hello World");
}

console.log(typeof heros); //object
console.log(typeof myObj);//object
console.log(typeof myFunc); //function object
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) , Heap (Non-Primitive)
//    copy                  Reefrence


let utubename="Hardikdotcom"
let anothername=utubename
anothername="sharmadotcom"
// console.log(utubename); //Hardikdotcom 
// console.log(anothername);  //sharmadotcom
//** As copy used above 


let userone={
    email:"sharma@google.com",
    upi:"user@ybl"
}

let usertwo=userone;
usertwo.email="hardik@google.com"
console.log(userone); //{ email: 'hardik@google.com', upi: 'user@ybl' } as refrence used so values changed for both






