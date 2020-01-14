// return strings with single parameters
// let sayHello =function(name){
    //     console.log(`Welcome User ${name} to Javascript functions world`);
        
    // }
    //sayHello('MICHAEL');

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
    console.log(adder(5,8));