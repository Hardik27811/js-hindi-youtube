// const useremail="abc.ai"//Got user email abc.ai

// const useremail="" //Not a valid email id 

// const useremail=[] //Got user email 

// const useremail=undefined //Not a valid email id 

// if(useremail){
//     console.log(`Got user email ${useremail}`);
    
// }
// else{
//     console.log(`Not a valid email id `);
    

// }


//++++++++++++++++++++++++++++++++++++++++ falsy values +++++++++++++++++++++++++++++++++++++++++

// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN



//  ++++++++++++++++++++++++++++++++++++++++  truthy values ++++++++++++++++++++++++++++++++++++++

// "0" , " " , "false " , [] , {} , function(){}




// to check if array

//  const useremail=[]

//  if(useremail.length ===0){
//     console.log(`is an Array`);  //is an Array
//  }





 // to check if an object

//  const useremail={}

//  if(Object.keys(useremail).length ===0){            //. AS Object.keys(obj) return an array 
//     console.log(` is an object`); // is an object
    
//  }




//++++++++++++++++++++++++++++++++++++++Nullish Coaleshing Operator (??) : null undefined

let val;
// val= 5 ?? 10 //5

// val= null ?? 10     //10

// val = undefined ?? 15   //15

// val = null ?? undefined  //undefined

// val = null ?? 10 ?? 20  //10

// console.log(val);




// ++++++++++++++++++++++++++++     Terniary operator ++++++++++++++++++++++++++++++=

//. condition ? true : false

const price =90

price >50 ? console.log(`more`) : console.log(`less`) //more



