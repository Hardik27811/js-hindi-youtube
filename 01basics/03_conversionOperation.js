let score="33"
console.log(typeof score); //string
console.log(typeof (score));  //string
let valueInNumber=Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33


// 


let a="33abc"
console.log(a);
console.log(typeof a); //string
let valueInNum=Number(a)
console.log(typeof valueInNum); //number
console.log(valueInNum); //Nan


//
let b="abc33"
console.log(b);
console.log(typeof b); //string
let valInNum=Number(b)
console.log(typeof valInNum); //number
console.log(valInNum); //Nan


//
let c=null
console.log(c);
console.log(typeof c); //null
let vaInNum=Number(c)
console.log(typeof vaInNum); //number
console.log(vaInNum); //0



//
let d=undefined
console.log(d);
console.log(typeof d); //undefined
let vaInNo=Number(d)
console.log(typeof vaInNo); //number
console.log(vaInNo); //Nan


//
let e=false
console.log(e);
console.log(typeof e); //undefined
let vaInN=Number(e)
console.log(typeof vaInN); //number
console.log(vaInN); //Nan


// 
let isLoggedIn=undefined
let booleanisLogedIn=Boolean(isLoggedIn)
console.log(booleanisLogedIn) 

//1 to 9 =>true ; 0=>false
//"" => fasle
// "hitesh" =>true
//null => false 
//undefined => false


