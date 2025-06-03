const accountId=12345
let accountEmail="shar@google.com"
var accountPassword="123"
accountcity="jaipur"

console.table([accountId,accountEmail,accountPassword,accountPassword])
// accountId=2. Not allowed
accountEmail="har@goo.com"
accountPassword="321"
accountcity="Delhi"
let accountstate // undefined
console.table([accountId,accountEmail,accountPassword,accountcity,accountstate])
// var block scope 

//let, var, char