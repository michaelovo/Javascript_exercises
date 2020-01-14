// return strings with single parameters
// let sayHello =function(name){
//         console.log(`Welcome User ${name} to Javascript functions world`);
        
//     }
//     sayHello('MICHAEL');

// return strings with multiple parameters
    let fullName = function(fname, lname){
        console.log(`Welcome! ${lname} ${fname}`); 
    }
    fullName('Micheal', 'Emmanuel');

    // return numerical values
    let adder =function(num1, num2){
        let sum = (num1 + num2);
        return sum;
    }
    //console.log("Sume : "adder(5,8));

    let mul = function(numA, numB){
        return numA * numB;
    }
    console.log("Product : " + mul(5,8));

    //setting default parameters
    let getUser = function(name ="User", courseCount=0){
        return 'Hello ' + name + "! Your course count : " +courseCount;
    }
    console.log(getUser('James', 9));


