// using math functions to generate randomm numbers between 12 and 5

let upperRange = 12
let lowerRange = 5
let result = upperRange/lowerRange

let randNum = Math.floor(Math.random() * (upperRange - lowerRange + 1) + lowerRange)

console.log(randNum);
console.log(upperRange/lowerRange)
console.log(result.toFixed(2));

