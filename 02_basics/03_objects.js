//singleton - if created by constructors then only singelton

//Object.create

//Object literals - if create by literals then non-singleton

//++using symbol inside an object 


const sym=Symbol("key1")

//console.log(typeof sym);

const jsUser={

    name:"Hardik",
    [sym]:"mykey1",
    "fullname": "HardikSharma",
    age:18,
    location:"Delhi",
    email:"sharma@google.com",
    isLoggedIn:true,
    lastLoginDays:['Monday','Tuesfday']

}
// console.log(jsUser.name); //Hardik

// console.log(jsUser["name"]); //Hardik

// console.log(jsUser.fullname); //HardikSharma

// // console.log(jsUser["fullname"]); /HardikSharma

// console.log(jsUser.sym);  //string -mysym1

// console.log(jsUser[sym]); //mykey1

//reassign value of objects

// jsUser.name="Raj"

// console.log(jsUser.name); //Raj

// Object.freeze(jsUser)

// jsUser.name="Raghav"

// console.log(jsUser); //no change

//++++++++++++++++++++++++++++++++++++++++

jsUser.greetingUser=function(){
    console.log("Hello jsUser");
    
}
jsUser.greetingUser2=function(){
    console.log(`Hello jsUser ${this.name}`);
    
}
//console.log(jsUser.greetingUser); //[Function (anonymous)]
 console.log(jsUser.greetingUser()); //Hello jsUser
//                                      undefined

console.log(jsUser.greetingUser2()); //Hello jsUser Hardik
//                                      undefined









