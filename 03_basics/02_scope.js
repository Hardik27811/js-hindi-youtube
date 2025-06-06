
var c=300
let a =200
if(true){
    let a=10
    const b=20
    // var c=30
    c=30
}
//console.log(a); //200
// console.log(b);
// console.log(c); //30


function one(){
    const name="hardik"
    function two(){
        const website="youtube"
        console.log(name);
    }
    //console.log(website);
    two()
    
}
//one()



if(true){
    const username="hardik"
    if(username ==="hardik"){
        const website="youtube"
        console.log(username  +  website) //hardikyoutube
    }
    //console.log(website);
    
}
//console.log(username);


//+++++++++++++++++++++++++++++++=++++++++++++++++. intresting +++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5)); //6
function addone(num){
    return num+1
}

// if decalred above not create error




// if this declared above create error
const addtwo=function(num){
    return num+2
}

console.log(addtwo(4)); //6


