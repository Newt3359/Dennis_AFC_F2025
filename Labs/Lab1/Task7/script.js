// script.js
// Name: Dennis Gingrich
// Task 7 - Grade Classification

// creates a function called classifyGrade that is equal to grade and a fat arrow function that'll return a string
const classifyGrade = (grade) =>
    // breaks down if your score is within certain ranges it will equate to a letter grade
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// sets constant called input that is equal to a number based of the prompt
const input = prompt("Enter a grade (0-100):");

// creates a constant called grade that is equal to input above cast to a number
const grade = Number(input);

// here we are checking if grade is a number if not we will ask the user for a valid input
if (Number.isNaN(grade)) {
    console.log("Error: Please enter a valid number.");
} else {
    // Here we have a constant called classification that is equal to the function classifyGrade with grade as an argument
    // then prints the result of the function call plus the string to the console
    const classification = classifyGrade(grade);
    console.log("The grade classification is:", classification);
}