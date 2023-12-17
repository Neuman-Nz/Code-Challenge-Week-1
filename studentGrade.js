//This is the grading system function that takes the grade/input value and compares it to our condition statement
function studentGradeSystem(Grade){
    if(Grade > 79){
        return 'A';
    }
    else if(Grade >= 60){
        return 'B';
    }
    else if(Grade >= 50){
        return 'C';
    }
    else if(Grade >= 40){
        return 'D';
    }
    else if(Grade < 40){
        return 'E';
    }   
}
//This funtion that sets the grading value of the user and passes it along as a parameter to our grading system function hence producing the grading result
function showPrompt() {
    const inputGrade = prompt("Enter the grade:");

    const numericGrade = parseFloat(inputGrade);

    if (!isNaN(numericGrade) && numericGrade >= 0 && numericGrade <= 100) {
        const result = studentGradeSystem(numericGrade);
        alert(`The student's grade is: ${result}`);
    } else {
        alert("Invalid grade. Grade should be a number between 0-100");
    }
}
