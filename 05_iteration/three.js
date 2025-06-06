// for of
// objects , array , string

const arr=[1,2,3,4,5]

for(const i of arr){  // ++++. for array
    // console.log(i);
    
}

let str="greetings" //++++. for string

for(const s of str){
    // console.log(s);
    
}

//++++++++++++++++++++++++++++++++++.  MAPS  ++++++++++++++++++++++++++++++++++++++++++++++++

// have unique values and SAME ORDER as per insertion

const map= new Map();
map.set('IN',"INDIA")
map.set('US','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')
map.set('IN',"INDIA")
// console.log(map);  
/*Map(3) {
  'IN' => 'INDIA',
  'US' => 'UNITED STATES OF AMERICA',
  'FR' => 'FRANCE'
} */

//   console.log(map.size); //3

for(const key of map){
    // console.log(key); 
    }
    //  /*[ 'IN', 'INDIA' ] [ 'US', 'UNITED STATES OF AMERICA' ] [ 'FR', 'FRANCE' ] */
    


for(const [key,value] of map){
    // console.log(`${key} -> ${value}`)
}
/* 
IN -> INDIA
US -> UNITED STATES OF AMERICA
FR -> FRANCE
*/


// for objects 

const myobj={
    game1: "nfs",
    game2:"gta"
}
for(const [key,value] of myobj){
    console.log(`${key} -> ${value}`);  // TypeError: myobj is not iterable
    
}

