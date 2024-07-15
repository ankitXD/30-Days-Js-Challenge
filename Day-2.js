//Activity 1

let num1 = 5;
let num2 = 3;
let sum = num1 + num2;
console.log(sum);

let num3 = 5;
let num4 = 3;
let difference = num1 - num2;
console.log(difference);

let num5 = 5;
let num6 = 3;
let product = num1 * num2;
console.log(product);

let num7 = 6;
let num8 = 3;
let quotient = num1 / num2;
console.log(quotient);

let num9 = 5;
let num10 = 3;
let remainder = num1 % num2;
console.log( remainder);

//Activity 2

let a = 10;
a += 5;
console.log("Result after += : " + a);

let b = 10;
b -= 5;
console.log("Result after -= : " + b);

//Activity 3

let num11 = 5;
let num12 = 3;
console.log("Is num1 > num2? " + (num1 > num2));
console.log("Is num1 < num2? " + (num1 < num2));

let num13 = 5;
let num14 = 5;
console.log("Is num1 >= num2? " + (num1 >= num2));
console.log("Is num1 <= num2? " + (num1 <= num2));

let num15 = 5;
let num16 = '5';
console.log("Is num1 == num2? " + (num1 == num2));  // true because of type coercion
console.log("Is num1 === num2? " + (num1 === num2)); // false because different types

//Activity 4

let a1 = true;
let b1 = false;
console.log("a && b: " + (a && b));

let a2 = true;
let b2 = false;
console.log("a || b: " + (a || b));

let a3 = true;
console.log("!a: " + (!a));

//Activity 5

let number = -5;
let result = (number >= 0) ? "Positive" : "Negative";
console.log("The number is: " + result);