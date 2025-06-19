// function multiplyby5(num){
//     return num*5;
// }
// multiplyby5.power=2;
// console.log(multiplyby5(5));  //25
// console.log(multiplyby5.power); //2
// console.log(multiplyby5.prototype); //{}


function createUser(username,price){
    this.username=username,
    this.price=price
}
createUser.prototype.increment=function(){
    this.price++;
   return this.price
}
createUser.prototype.printme=function(){
    console.log(this.price);
    
}

const chai=new createUser("chai",25)
const tea=new createUser("tea",250)

// console.log(tea.increment()); //undefined
chai.printme()

