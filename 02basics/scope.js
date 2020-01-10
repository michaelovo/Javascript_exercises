// let and var---- use 'var' only to declare global variables

// let iAmGlobal ="welcome"

// if(true){
//     let iAmLocal ="not welcome"
//     // var iAmLocal ="not welcome"

//     iAmGlobal = "Bye bye"

//     console.log(iAmLocal);
//     console.log(iAmGlobal)
// }
// console.log(iAmLocal)
// console.log(iAmGlobal);


//King problem: lesson-: alwz declare ur variables
let king ="John";
if(true){
    // let king = "Sam";
    if(true){
        king = "Tope";
        console.log("The king is " + king);
    }
}
if(true){
    console.log("The king is " + king);
}