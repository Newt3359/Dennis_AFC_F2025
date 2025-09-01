// script.js
// Name: Your Name
// Task 10 - How Long Until Graduation

// fat arrow function called getToday that returns today's date and doesn't take any parameters
const getToday = () => {
    return new Date();
};

// creates a constant called today that is equal to today's date from the getToday function call
const today = getToday();

// creating an array constant called days that stores all the days of the week with sunday at index zero
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// getting the string value from the array above using the days array and pulling
// from that index value provided by the machines integer value for the day using the .getDay() method
const weekday = days[today.getDay()];

// Creating an array constant called months that stores all the months in a year
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Getting the full 4 digit year from today constant using .getFullYear() method
const year = today.getFullYear();

// Getting the String month from the array months using the machines integer
// value for month as the index value for the array months
const month = months[today.getMonth()];

// Getting day number from the constant today and the getDate method call
const day = today.getDate();

// Fat arrow function that takes the day number to return a string for the suffix
// It uses the modules 10 to determine the suffix of the number day
const getSuffix = (n) => {
    if ([11, 12, 13].includes(n % 100)) return "th";
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};
// constant called formattedDate that takes all the variables we outlined above and puts it into the format we want
// with the call of the fat arrow function named getSuffix
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// prints to console the day of the week for today and the formatted date of today
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// creating a constant called graduationDate equal to a new date with a given date value
const graduationDate = new Date("2025-11-13");

// creates a constant called diff that is equal to graduationDate minus the today variable
const diff = graduationDate - today;

// A constant named daysRemaining which is equal to the next highest integer of the math operation below
// The math operation is needed because javascript stores dates as how many milliseconds have elapsed since 1 Jan 1970
// so we will divide the difference by how many milliseconds are in a day to get how many days are remaining till graduation
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// prints to console how many days of web design we have till graduation
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");