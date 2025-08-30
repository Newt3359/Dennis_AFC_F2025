// script.js
// Name: Dennis Gingrich
// Task3 - Favorite Color Selector

//Creates an array called colors that holds three values
let colors = ["red", "blue", "green"];

// creates a function called addColor that takes an array as an argument
function addColor(colorArray) {
    // creates a constant called new Color with the value that is equal to the users input based off the prompt
    const newColor = prompt("Enter a color to add:");

    // adds the new color above to the beginning of the array
    colorArray.unshift(newColor);

    // prints to console the updated array with the new color
    console.log("Updated colors:", colorArray);
}

// calls the addColor function with the colors array as an argument
addColor(colors);