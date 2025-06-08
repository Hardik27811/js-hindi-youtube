// +++++++++++++++++++++++++++    forEach       +++++++++++++++++++++++++++++++==

const coding=["js","ruby","java","python","cpp"]

const getcode=coding.forEach((item)=>{
    //console.log(item);
    return item
})
// console.log(getcode);//undefined


//+++++++++++++++++++++++++++++++. filter ++++++++++++++++++++++++++++++++=++


const num=[1,2,3,4,5,6,7,8,9,10]

// const nnum=num.filter((n)=>( n>4))

// const nnum=num.filter((k)=>{
//     return k>4 //[ 5, 6, 7, 8, 9, 10 ]
// })


// console.log(nnum) //[ 5, 6, 7, 8, 9, 10 ]


// doing same using forEach

const ar1=[]

num.forEach((item)=>{
    if(item >4){
        ar1.push(item)
    }
})
console.log(ar1);  //[ 5, 6, 7, 8, 9, 10 ]

