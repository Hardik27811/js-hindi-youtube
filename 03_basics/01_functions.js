function saymyname(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("D");
    console.log("I");
    console.log("K");
}
    
//saymyname()

//++++++++++++++++++ add two num

// function addtwonum(num1,num2){ // values during func definition r parameters
//     console.log(num1+num2);
    
// }

function addtwonum(num1,num2){ // values during func definition r parameters
//    let  res=(num1+num2);
//    return res;
return num1+num2
    
}

/*
addtwonum()// no arguments 0p=> Nan
addtwonum(3,4) //7
addtwonum(3,"4")//34
addtwonum(3,"a")//3a
addtwonum(3,null) //3   */

let res=addtwonum(3,4)
console.log(res); //undefined
console.log(res); //7. only if retuen used

//

function loginUserMessage(user){

    //return `User name is ${user}`
    // if(user === undefined){
    //     console.log(`enter user name`);
    //     return
    // }
    if(!user){
        console.log(`enter user name`);
        return
    }

    return `user name is ${user}`

}
// console.log(loginUserMessage("ram")); //User name is ram
//console.log(loginUserMessage(""));  //User name is 
console.log(loginUserMessage()); //User name is undefined  // +++++++++++++ enter user name
//                                                                          undefined




// rest operator [ ...num1]. convert into an array

// function calculatecartprice(num){
//     return num
// }

// function calculatecartprice(val1,val2,...num){
//     return num
// }

function calculatecartprice(...num){
    return num
}

// console.log(calculatecartprice(100,200,300)); //100
//console.log(calculatecartprice(100,200,300)); //[ 100, 200, 300 ]. //[ 300 ]



//++++++++++++++++++++++++++++. object handling in functions +++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj1={
    name :"hardik",
    price :"999"
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.name} and price is ${anyObj.price}`);
    
}
//handleObject(obj1); //Username is hardik and price is 999

handleObject({
    name:"sam",
    price:399
}) //Username is sam and price is 399




//++++++++++++++++++++++++++++++++++++++++++. array handling in functions ++++++++++++++++++++++++++++++++++==++++=+++++++
const arr=[100,200,300,400,500]

function arryhandling(anyarr){
    return anyarr[0]
}
console.log(arryhandling(arr));//100

console.log(arryhandling([1,2,34,5])); //1

