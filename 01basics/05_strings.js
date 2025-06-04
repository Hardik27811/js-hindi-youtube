const name="hardik"
const repocount=30
//console.log(name + repocount + " value");

//String Interpolation using backtics ` ` by making placeholders and injecting values into it 
//console.log(`Hello my name is ${name} and my reopocount is ${repocount}`);


const gameName=new String("hardik")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('d'));
//console.log(typeof gameName); //object


//++Both extract characters from start up to but not including end.|


// let nstring=gameName.substring(0,4)
// console.log(nstring);
// let anotherstr=gameName.slice(-7,4)
// console.log(anotherstr);


const nstr="  hardik     "
// console.log(nstr);
// console.log(nstr.trim());


const a="har%20dik@google%20.com"
console.log(a.replaceAll('%20','-')) //har-dik@google-.com

console.log(a.replace('%20','-'));    //har-dik@google%20.com

console.log(a.includes('har'))       //true

console.log(a.split('%20'));   //[ 'har', 'dik@google', '.com' ]















