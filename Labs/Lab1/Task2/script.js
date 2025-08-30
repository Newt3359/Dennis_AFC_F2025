// script.js
// Name: Dennis Gingrich
// Task 2 - Simple Interest Calculator

// Creating a function that takes three arguments to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // function will return the product of the three parameters divided by 100
    return (principal * rate * time) / 100;
}

// Sets the constant principal from the users input
const principal = Number(prompt("Enter the principal amount:"));

// Sets the constant rate from the users input
const rate = Number(prompt("Enter the rate of interest:"));

// Sets the constant time from the users input asking for it in  years
const time = Number(prompt("Enter the time in years:"));

// Calls the simple interest function setting its value to a constant named interest based on the total we got when we pass
// the three arguments that we got above to the function
const interest = calculateSimpleInterest(principal, rate, time);

// Prints the statement + interest to the console
console.log("Your simple interest is:", interest);