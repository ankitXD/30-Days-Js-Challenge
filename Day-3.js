//Activity 1

//Task 1
let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//Task 2
let age = 20;

if (age >= 18) {
    console.log("The person is eligible to vote.");
} else {
    console.log("The person is not eligible to vote.");
}

//Activity 2

//Task 3
let num1 = 5;
let num2 = 10;
let num3 = 7;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log(num1);
    } else {
        console.log(num3);
    }
} else {
    if (num2 >= num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

//Activity 3

//Task 4
let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(dayName);

//Task 5
let score = 85;
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(grade);

//Activity 4

//Task 6
let numbers = 4;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is: " + result);

//Activity 5

//Task 7
let year = 2020;
let isLeapYear;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            isLeapYear = true;
        } else {
            isLeapYear = false;
        }
    } else {
        isLeapYear = true;
    }
} else {
    isLeapYear = false;
}

console.log(year + isLeapYear);