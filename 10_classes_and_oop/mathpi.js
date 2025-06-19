// console.log(Object.getOwnPropertyDescriptor(Math,'PI'));
// console.log(Math.PI);

// Math.PI=5;

// console.log(Math.PI);

const chai={
    name:"chai",
    price:250,
    isavail:true,

    orderchai: function(){
        console.log('chai nhi bni');
        
    }
}


console.log(Object.getOwnPropertyDescriptor(chai,'name')); //{ value: 'chai', writable: true, enumerable: true, configurable: true }

Object.defineProperty(chai,'name',{
    enumerable:true,
    writable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name')); //{ value: 'chai', writable: true, enumerable: true, configurable: true }

for (let [key,val] of Object.entries(chai)) {
    if(typeof val !== 'function'){
    console.log(`${key} :${val}`);
    }
    
}