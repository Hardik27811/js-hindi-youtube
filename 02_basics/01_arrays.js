//. {} => curly braces

//. [] =>brackets

//. () =>parenthesis

//arrays

const arr=[0,1,2,3,4,5,6]

//console.log(arr[1])

const heros=["shaktiman","batman","spderman"] //++ copy ops in js create [shallow copies] like taking refrence of org value

// [deep copies] are vice versa



const myarr=new Array(1,2,3,4,5)

// Arrays method

//++push

myarr.push(6);

myarr.push(7);

// console.log(myarr); //[ 1, 2, 3, 4, 5, 6 ]. 


//++pop

myarr.pop()

//console.log(myarr); //[ 1, 2, 3, 4, 5, 6 ]

//++unshift

myarr.unshift(9)

//console.log(myarr); //[ 9, 1, 2, 3, 4, 5, 6 ]

//++shift

myarr.shift()

//console.log(myarr) //[ 1, 2, 3, 4, 5, 6 ]. works only after unshift


//++includes

console.log(myarr.includes(9)); false

//++indexof

console.log(myarr.indexOf (10)); //-1

//++join {converts into string}

const narr=myarr.join()

console.log(narr); //1,2,3,4,5,6

console.log(typeof narr); //string


//slice and splice

/* slice do not change org array

   splice change og arry

*/

//+++ slice

console.log('A',myarr); //A [ 1, 2, 3, 4, 5, 6 ]
  
const narr1=myarr.slice(1,3)

console.log(narr1); //[ 2, 3 ]

console.log("B",myarr); //B [ 1, 2, 3, 4, 5, 6 ]


//+++splice. ---  takes whole range as op and change the org array by removing range

const narr2=myarr.splice(1,3)

console.log(narr2); //[ 2, 3, 4 ]

console.log("C",myarr); C [ 1, 5, 6 ]
















