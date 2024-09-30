// A simple function that takes no parameters and returns no value
function greet(): void {
  console.log("Hello, welcome to TypeScript!");
}
greet(); // Calling the greet function to print a greeting message

// Function with parameters and return type
function add(a: number, b: number): number {
  return a + b; // The return type is a number because we are returning the sum of two numbers
}
const sum = add(5, 10); // Calling the add function with arguments 5 and 10
console.log(`Sum: ${sum}`); // Output: Sum: 15

// Optional parameters: We can define a parameter as optional by using the '?' symbol
function multiply(a: number, b?: number): number {
  if (b) {
    return a * b; // If both parameters are provided, multiply them
  }
  return a; // If only one parameter is provided, return that value
}
console.log(multiply(5, 10)); // Calling multiply with two arguments (5 * 10), Output: 50
console.log(multiply(5)); // Calling multiply with one argument, Output: 5 (b is optional)

// Default parameters: If no argument is passed, it takes the default value
function power(base: number, exponent: number = 2): number {
  return Math.pow(base, exponent); // Raises the base to the exponent (default is 2)
}
console.log(power(5)); // Calling power with one argument (5^2), Output: 25
console.log(power(5, 3)); // Calling power with two arguments (5^3), Output: 125

// Rest parameters: Allows us to pass any number of arguments as an array
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0); // Reduces the array to the sum of all numbers
}
console.log(sumAll(1, 2, 3, 4, 5)); // Calling sumAll with multiple arguments, Output: 15

// Function that returns another function (Closure)
function outerFunction(name: string): () => string {
  return function () {
    return `Hello, ${name}`; // The returned function can access the `name` variable from the outer scope
  };
}
const greetingFunction = outerFunction("TypeScript"); // Calling outerFunction and storing the returned function
console.log(greetingFunction()); // Calling the returned function, Output: Hello, TypeScript

// Arrow functions: A shorthand way of writing functions
const subtract = (a: number, b: number): number => a - b;
console.log(`Subtraction: ${subtract(10, 5)}`); // Calling subtract, Output: Subtraction: 5

// Function types: We can assign a function to a variable with a specific type
let multiplyNumbers: (a: number, b: number) => number;
multiplyNumbers = (x, y) => x * y; // Assigning a function that matches the type
console.log(multiplyNumbers(5, 6)); // Calling multiplyNumbers, Output: 30

// Callback functions: A function passed as an argument to another function
function computeAndLog(
  operation: (x: number, y: number) => number,
  num1: number,
  num2: number
): void {
  const result = operation(num1, num2);
  console.log(`The result of the operation is: ${result}`);
}
computeAndLog((a, b) => a * b, 5, 10); // Passing a callback function (multiplication), Output: The result of the operation is: 50

// Recursive functions: A function that calls itself
function factorial(n: number): number {
  if (n === 1) {
    return 1; // Base case: When n is 1, return 1 to stop recursion
  }
  return n * factorial(n - 1); // Recursively multiply n by factorial of (n-1)
}
console.log(factorial(5)); // Calling factorial, Output: 120 (5*4*3*2*1)

// Function overloading: Defining multiple function signatures with different parameter types
function describe(value: number): string;
function describe(value: string): string;
function describe(value: any): string {
  if (typeof value === "number") {
    return `This is a number: ${value}`;
  } else if (typeof value === "string") {
    return `This is a string: "${value}"`;
  }
  return "Unknown type";
}
console.log(describe(42)); // Calling describe with a number, Output: This is a number: 42
console.log(describe("TypeScript")); // Calling describe with a string, Output: This is a string: "TypeScript"

// Higher-order functions: Functions that take other functions as arguments or return functions
function mapArray(arr: number[], func: (n: number) => number): number[] {
  return arr.map(func); // Applies the passed function to each element of the array
}
const doubled = mapArray([1, 2, 3], (n) => n * 2); // Passing a function to double the array values
console.log(doubled); // Output: [2, 4, 6]

// Why do we use functions?
// Functions help us organize code into reusable and modular blocks. They allow us to avoid repeating code (DRY principle)
// and make the code more readable and maintainable. Functions can take input (parameters) and return a result, or just perform actions like logging or updating a value.
