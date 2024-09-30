"use strict";

// A simple function that prints a greeting message
function greet() {
  console.log("Hello, welcome to JavaScript!");
}
greet();

// Function with parameters that returns the sum of two numbers
function add(a, b) {
  return a + b;
}
const sum = add(5, 10);
console.log(`Sum: ${sum}`); // Output: Sum: 15

// Function with optional parameters
function multiply(a, b) {
  if (b) {
    return a * b;
  }
  return a;
}
console.log(multiply(5, 10)); // Output: 50
console.log(multiply(5)); // Output: 5

// Function with default parameters
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
}
console.log(power(5)); // Output: 25
console.log(power(5, 3)); // Output: 125

// Function using rest parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Function that returns another function (Closure)
function outerFunction(name) {
  return function () {
    return `Hello, ${name}`;
  };
}
const greetingFunction = outerFunction("JavaScript");
console.log(greetingFunction()); // Output: Hello, JavaScript

// Arrow function for subtraction
const subtract = (a, b) => a - b;
console.log(`Subtraction: ${subtract(10, 5)}`); // Output: Subtraction: 5

// Function types: Assigning a function to a variable
let multiplyNumbers = (x, y) => x * y;
console.log(multiplyNumbers(5, 6)); // Output: 30

// Callback function
function computeAndLog(operation, num1, num2) {
  const result = operation(num1, num2);
  console.log(`The result of the operation is: ${result}`);
}
computeAndLog((a, b) => a * b, 5, 10); // Output: The result of the operation is: 50

// Recursive function for calculating factorial
function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Function to describe the type of input
function describe(value) {
  if (typeof value === "number") {
    return `This is a number: ${value}`;
  } else if (typeof value === "string") {
    return `This is a string: "${value}"`;
  }
  return "Unknown type";
}
console.log(describe(42)); // Output: This is a number: 42
console.log(describe("JavaScript")); // Output: This is a string: "JavaScript"

// Higher-order function: Applies a function to each element of an array
function mapArray(arr, func) {
  return arr.map(func);
}
const doubled = mapArray([1, 2, 3], (n) => n * 2);
console.log(doubled); // Output: [2, 4, 6]
