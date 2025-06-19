function Setusername(username){
    this.username=username;
}
function createusername(username,email,password){
    // Setusername(username); //createusername { email: 'sjs@hkkai.com', password: '1234' }
    // Setusername.call(username)  //createusername { email: 'sjs@hkkai.com', password: '1234' }
    Setusername.call(this ,username)  /*createusername {
  username: 'hardik',
  email: 'sjs@hkkai.com',
  password: '1234'
} */
    this.email=email;
    this.password=password;
}
const chai=new createusername("hardik","sjs@hkkai.com","1234") 
console.log(chai);
