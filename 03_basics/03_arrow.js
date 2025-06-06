//+++++. ((    this  ->     used for current context ))


//+++++++++. used below under an object
const user={
    username:"hardik",
    price: 999,
    welcomemessage :function(){
        console.log(`${this.username}, welcome to website` );
       /*  console.log(this); /* hardik, welcome to website
{
  username: 'hardik',
  price: 999,
  welcomemessage: [Function: welcomemessage]
}
sam, welcome to website
{
  username: 'sam',
  price: 999,
  welcomemessage: [Function: welcomemessage]
}*/
        
        
    }
    
}
// user.welcomemessage() //hardik, welcome to website

// user.username="sam"
// user.welcomemessage() //sam, welcome to website

//console.log(this); //{}


//++++++++++++++++++++ used under a function

// const chai=function(){
//     let user="hardik"
//     console.log(this.user);
    
// }
// chai() //undefined

// using it within an arrow function

const chai=()=>{
     let user="hardik"
    //  console.log(this);//{}
    //console.log(this.user);  // undefined
    
     
}
//chai()


//++++++++++++++++. using arrow nomrl

// const add=(num1,num2)=>{
//     return num1+num2
// }


//+++++++++++++++++. implicit return (no use of return in single line)

const add=(num1,num2)=> (num1+num2)

console.log(add(3,4)); //7


// if wants to return obj
const add3=(num1,num2)=> {name : "hardik"} //undefined
//const add3=(num1,num2)=> ({name : "hardik"}) //{ name: 'hardik' }
console.log(add3(3,4)); 

// NOTE :- if use curly braces {}, then need to use return
// if use  parenthesis () , then no use of return