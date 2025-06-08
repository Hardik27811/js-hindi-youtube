// reduce

const nums=[1,2,3]

const res=nums.reduce((acc,currval)=>{
// console.log(`acc :${acc} , currval :${currval}`);
return currval+acc

//acc :0 , currval :1
// acc :1 , currval :2
// acc :3 , currval :3
//6

// acc :3 , currval :1
// acc :4 , currval :2
// acc :6 , currval :3
// 9
},3)

// console.log(res);



//++++++++++++++++++++++++++++++++++++++++++    shopping cart +++++++++++++++++++++++++++++

const shoppingCart=[
    {
        cname:"js",
        price:233
    },
     {
        cname:"ruby",
        price:453
    },
     {
        cname:"cpp",
        price:899
    },
     {
        cname:"swift",
        price:677
    },
]


const val=shoppingCart.reduce((acc,item)=>{
    return item.price + acc;
},0)

console.log(val); //2262

