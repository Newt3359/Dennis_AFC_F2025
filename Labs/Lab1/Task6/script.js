// script.js
// Name: Dennis Gingrich
// Task 6 - Student Array Operations

// creates an array named students that holds the students name and age
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

// creates a function named updateStudentAge that takes an array as a parameter. This function returns nothing
const updateStudentAge = (array) => {
    // creating a variable equal to the user's input based off the prompt named studentName
    let studentName = prompt("Enter the student's name to update:");

    // setting a variable named student to go through the entire array and
    // compares each name in the array in all lower case to the users input in all lower case
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    // if student does not match the users input to a students name in the array
    // it will return an error that the student was not found.
    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    // if the student was found we will ask to update the age of the student from the user and set it to the constant new age.
    let newAge = Number(prompt("Enter the new age:"));

    // checks if the newAge that we asked the user for is a number, if it is not we return
    // an error to the console and ask for a number again
    if (Number.isNaN(newAge)) {
        console.log("Error: Age must be a number.");
        return;
    }

    // if it is a number we will set the students age to the newAge we got above
    student.age = newAge;

    // Finally we will print the string below with the updated array to the console
    console.log("Updated students:", array);
};

// here is the function call with students as an argument
updateStudentAge(students);