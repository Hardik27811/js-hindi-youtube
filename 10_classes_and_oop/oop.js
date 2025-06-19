// // const myobj={
// //     username:'hardik',
// //     login:8,
// //     signedIn: true,
// //     getuser :function(){
// //         // console.log(`username: ${this.username}`);
// //         console.log(this);
        
        
// //     }
// // }
// // const myobj2={
// //     username:'hardik',
// //     login:8,
// //     signedIn: true,
// //     getuser :function(){
// //         // console.log(`username: ${this.username}`);
// //         console.log(this);
        
        
// //     }
// // }
// // // console.log(myobj.getuser()); //username: hardik
// //                                 //undefined
// // console.log(myobj.getuser()); /*{
// //   username: 'hardik',
// //   login: 8,
// //   signedIn: true,
// //   getuser: [Function: getuser]
// // }
// // undefined */
// // console.log(this); //{}



// function User(username,logincount,isloggedin){
//     this.username=username,
//     this.logincount=logincount,
//     this.isloggedin=isloggedin
//     // return this.    // don ot needed
// }

// // if we nt use new keyword then it will nt create new instance thus overwrite
// const a=User("hardik",4,true)/* username: 'hardik',
//   logincount: 4,
//   isloggedin: true */
// const b=User("kartik",3,true)/*  username: 'kartik',
//   logincount: 3,
//   isloggedin: true */
// // console.log(a);
// const c=new User("hardik",4,true)/* username: 'hardik',*/
// const d=new User("kartik",3,true)/*  username: 'kartik',*/
// console.log(c); //User { username: 'hardik', logincount: 4, isloggedin: true }



// /*                      +++++++++++++++++++++++  NEW                   ++++++++++++++++++++++ 

// stp1=. empty obj created called instance
// stp2=  constructor func callled cause of new kywrd (jitne bhi arguments h pack krke de deta h)
// stp3=. this kywrd jitne bhi args h inject ho jaate h


// */                   
const user=(username,logincount,isloggedin)=>{

    this.username=username,
    this.logincount=logincount,
    this.isloggedin=isloggedin
    // return this.    // don ot needed
}

const d=new User("kartik",3,true)
console.log(d);
