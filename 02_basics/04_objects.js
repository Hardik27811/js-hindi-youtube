//const tinderuser = new Object(); // singleton objects

const tinderuser={} //{}
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false

//console.log(tinderuser); //{}

const ruser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hardik",
            lastname:"sharma"
        }
    }
}
// console.log(ruser.fullname.userfullname.firstname);//hardik


//++++++++++++++++. to add two objects.  using Object.assign

const obj1={ 1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}
const obj4=Object.assign(obj1,obj2,obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//const obj4=Object.assign({},obj1,obj2,obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//console.log(obj4); 


//++++++++++++++++++++ using spread

const obj5={...obj1,...obj2,...obj3} //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//console.log(obj5);


//

const usera=[
    {
        id:1,
        email: "h@google.com"
    },
    {
        id:2,
        email: "g@google.com"
    },
    {
        id:3,
        email: "i@google.com"
    }
]
/*
console.log(usera[1]); //{ id: 2, email: 'g@google.com' }

console.log(tinderuser); //{ id: '123abc', name: 'sammy', isLoggedIn: false }

console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderuser)); //[ '123abc', 'sammy', false ]

console.log(Object.entries(tinderuser)); //[ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderuser.hasOwnProperty('isLoggedIn')); //true


*/

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&. destructure &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

const course={
    coursename:"js ",
    price: "999",
    courseInstructor :"hitesh"
}

// console.log(course.courseInstructor); //hitesh
// console.log(course["courseInstructor"]);  //hitesh

// to decalre single time about the course and use frequently

const{courseInstructor}=course

const{price}=course

console.log(courseInstructor); //hitesh
console.log(price); //999



//++++++++++++++++++++++++++++++++++++++. api ++++++++++=++++++++====+===============

//json format. [ JAVA SCRIPT OBJECT NOTATION]
/*
"name" : "hardik",
"surname" : "kumar",
"email" : "sh@googlt.com",
"age" : 46 ,
"isAdult" : true

*/

[
    {},

    {},
    
    {}
]









