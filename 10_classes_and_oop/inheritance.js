class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password
    }
    addcourse(){
        console.log(`the course is ${this.username}`)
    }
}
const chai=new Teacher('chai','aur@H.com','123')
console.log(chai.logMe()); //Username is chai
chai.addcourse() //the course is chai

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

