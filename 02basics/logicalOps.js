// LOGICAL OP&&, ||

let isVerified = false
let isGuest = true
let hasPaymentToken = true
let isLoggedIn = true

if(isVerified && isLoggedIn && hasPaymentToken){
    console.log("Greeting : welcome!");
    console.log("Grant access to paid courses")
}else if(isGuest || isVerified){
    console.log("Allow access to preview courses");
}else{
    console.log("Please contact admin");
}
