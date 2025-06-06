//Immediately Invoked Function Expression

// function chai(){
//     console.log("DB connectes");
// }
// chai()

// global scope k pollutin ko hatane k lia iife k use hota h


// named iife below

(function chai(){

    console.log("DB connectes"); //DB connectes

})();

// need to use semicolon after using iife

((name)=>{
    
    console.log(`db connected 2 ${name}`);//db connected 2
    
})('hardik');

