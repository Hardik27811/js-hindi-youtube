const num=[1,2,3,4,5,6,7,8,9,10]

// const nem=num.filter((k)=>(k+10))

//[
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]

// const nem=num.map((item)=>{
    //return item+10  

// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// })


//+++++++++++++++++++++++++++++++++++++     chaining    ++++++++++++++++++++++++++++++++++++++++++++++++++

const nem= num.map((item)=> item *10)
               .map((item)=> item + 1)
               .filter((item)=> item >= 40)

console.log(nem); 
