// script.js
// Name: Dennis Gingrich
// Lab1 - Dynamic Age Calculator

//function named calculate age that accepts an argument named year
function calculateAge(year) {
// setting a const named current year which gets its info from the built-in date function.
// It is specifically asking for the  4 digit year only with the get full year call
    const currentYear = new Date().getFullYear();

//this will return the total from current year which is retrieved above minus the year in which the user is born that we accept  below.
    return currentYear - year;
}

// Here we are creating a constant named input which will get its value from user
// input after displaying the message in the parentheses
const input = prompt("Enter your birth year (e.g., 2004):");

//  here we are setting and creating the constant birthyear which is equal to the const input we obtained above in the prompt
const birthYear = Number(input);

//Here is an if statement that checks if the birthyear the user input is a valid entry
// if the user input is "empty"/null or not a number i.e. seven the user will get an error message
if (input === null || Number.isNaN(birthYear)) {

    console.log("No valid year provided.");
// if user input passes the checker above the calculate age function described above will run, and
// we will store the result in a const called age then print the statement below plus their age to the terminal
} else {

    const age = calculateAge(birthYear);

    console.log("Your age is:", age);
}