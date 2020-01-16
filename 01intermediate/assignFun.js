// Simple program using if stmt and function

let myGrade = function(currentMarks = 0, totalMarks = 0){
    let myPercentage = (currentMarks/totalMarks)*100
    let gradeValue = ''

    if(myGrade >= 70){
        gradeValue = 'A'
    }else if(myGrade >=60){
        gradeValue ='B'
    }else if(myGrade >=50){
        gradeValue ='C'
    }else if(myGrade >= 40){
        gradeValue = 'D'
    }else{
        gradeValue = 'F'
    }
    return `your grade is ${gradeValue} and your percentage is ${myPercentage}`
}

let yourResult = myGrade(92, 65);
console.log(yourResult)