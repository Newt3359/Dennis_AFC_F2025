// script.js
// Name: Dennis Gingrich
// Task 9 - Weekday Detector

// Creating a fat arrow function called getWeekday that takes no parameter and returns a String from an array index
const getWeekday = () => {
    // setting a constant called today from the current date of the machine
    const today = new Date();

    // setting a constant called day equal to the day of the today constant using the getDay method
    const dayNumber = today.getDay();

    // creating an array of strings that store all the days of the week starting with sunday at index 0
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // return statement with the array days with an index of dayNumber to get the string for the machines current day of the week
    return days[dayNumber];
};

// prints the string below plus the result of the fat arrow function call of getWeekday
console.log("Today is:", getWeekday());