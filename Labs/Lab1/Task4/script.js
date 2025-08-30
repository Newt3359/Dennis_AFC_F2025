// script.js
// Name: Dennis Gingrich
// Task 4 - Event Countdown with Date Object

// Creates a function named calculateDaysUntil that takes event date as an argument
function calculateDaysUntil(eventDate) {
    // creates a constant called today that equals today's date
    const today = new Date();

    // Creates a constant called event that equals the date of the variable named eventDate
    const event = new Date(eventDate);

    // A constant named diff which is equal to the event date minus today's date
    const diff = event - today;

    // A constant named days which is equal to the next highest integer of the math operation below
    // The math operation is needed because javascript stores dates as how many milliseconds have elapsed since 1 Jan 1970
    // so we will divide the difference by how many milliseconds are in a day to get how many days till the event
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    // Here we are returning days from what we calculated above
    return days;
}

// Here we are asking the user for an event date in a certain format and setting it equal to a variable name eventDate
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// here we are setting a constant name dateFormat where we only want a date in the following format YYYY-MM-DD
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
// Here we are evaluating the date given to us by the user compared to the format we created above
// if the users date does not past the evaluation date we will continue to ask for a date till the user provides a valid date
while (!dateFormat.test(eventDate)) {
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}

// Here we are setting the constant named daysRemaining equal to the output of the function
// calculateDaysUntil when we pass the eventDate as an argument
const daysRemaining = calculateDaysUntil(eventDate);

// Finally we print to console the String below plus the days remaining till the event we calculated above
console.log("Days until the event:", daysRemaining);