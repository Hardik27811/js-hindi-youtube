// class User{
//     constructor (username,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeUsename(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai=new User("chai","chai@tea.com","123")
// console.log(chai.encryptpassword()); //123abc
// console.log(chai.changeUsename());  //CHAI



function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const tea=new User("tea","twa@chai.com","456")
console.log(tea.encryptpassword()); //456abc
console.log(tea.changeUsername()); //TEA



