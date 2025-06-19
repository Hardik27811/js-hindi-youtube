class User{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get password(){
        return `${this._password}hardik`
    }
    set password(value){
        this._password=value;
    }
    get email(){
        return`${this._email}`
    }
    set email(value){
        this._email=value.toUpperCase();
    }
}
const A=new User("a@.ai",123)
// console.log(A.password); //123hardik
console.log(A.email);
