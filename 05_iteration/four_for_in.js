// for in

const lang={
    js:'javascipt',
    rb : 'ruby',
    cpp: 'c++',
    swift : 'swift by apple'
}

for(const key in lang){
   // console.log(key);  
/*js
rb
cpp
swift*/
    
}
for(const key in lang){
//    console.log(lang[key]); 
    /*
javascipt
ruby
c++
swift by apple
    */
} 

for(const key in lang){ ///  using of instead of in cause TypeError: lang is not iterable
//    console.log(`${key} full form is ${lang[key]}`)
   /*
js full form is javascipt
rb full form is ruby
cpp full form is c++
swift full form is swift by apple
   */
}


//++++++++++++++++++ array +++++++++====================

const arr=[1,2,3,4,5]
for(const key in arr){
    // console.log(key);  
    /*
0
1
2
3
4
    */
    
}
for(const key in arr){
    // console.log(arr[key])
/*
1
2
3
4
5
*/
}

for(const key in arr){
    // console.log(`${key} value is ${arr[key]} `)
/*
0 value is 1 
1 value is 2 
2 value is 3 
3 value is 4 
4 value is 5 
*/
}


// ++++++++++++++++++++++++++++++++++. Maps using for in +++++++++++++++++++++++=

const map= new Map();
map.set('IN',"INDIA")
map.set('US','UNITED STATES OF AMERICA')
map.set('FR','FRANCE')
map.set('IN',"INDIA")

for(const key in map){
    console.log(key); // nothing coz map is uniterable
    
}