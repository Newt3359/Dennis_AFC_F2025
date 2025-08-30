// script.js
// Name: Dennis Gingrich
// Task 5 - Temperature Classifier

// Creates a function called classifyTemperature that accepts Celsius as a parameter
function classifyTemperature(celsius) {
    // creates a constant named Fahrenheit that is equal to the conversion formula from celsius to Fahrenheit
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // An if statement that will return a String depending on what temperature is passed through the function
    // for example if the temp = 81 the function will return warm
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// Creates a constant equal to the input from the user based off the prompt
const input = prompt("Enter temperature in Celsius:");

// Setting a constant named celsius equal to the users input and casting it to an integer
const celsius = Number(input);

// checks if the users input is a number, if not it displays an error message and asks for a valid number
if (Number.isNaN(celsius)) {
    console.log("Error: Please enter a valid number.");
} else {
    // if it is valid it will set the constant classification equal to the function call while passing the celsius argument
    const classification = classifyTemperature(celsius);

    // Then we will print the following string plus the classification we got in the function above
    console.log("The temperature is:", classification);
}