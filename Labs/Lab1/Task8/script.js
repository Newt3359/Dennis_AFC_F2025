// script.js
// Name: Dennis Gingrich
// Task 8 - Shopping List Operations

// creating an array List called shopping list with 3 strings
let shoppingList = ["eggs", "butter", "flour"];

// Creating a fat arrow function called modifyItem that takes a list and a newItem as a parameter and returns nothing
const modifyItem = (list, newItem) => {
    // adding a new item to the end of the array list
    list.push(newItem);

    // prints the string below plus the updated array list with the new item added
    console.log("Updated shopping list:", list);
};

// creating a constant userItem that is equal to a string from the user input based off the prompt below
const userItem = prompt("Enter a new item to add to the shopping list:");

// checking to make sure the user input is a string if not we will print an error message and get another user input
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // if valid item we will pass the userItem we just got from the user and the list we wish to modify to the modifyItem
    // fat arrow function
    modifyItem(shoppingList, userItem);
}