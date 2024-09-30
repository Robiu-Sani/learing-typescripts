"use strict";

console.log("Array in JavaScript");

// 1. Basic Array of Numbers
const numArray = [1, 2, 3, 4, 5];
console.log("Number Array:", numArray); // Output: [1, 2, 3, 4, 5]

// 2. Array of Strings
const strArray = ["apple", "banana", "cherry"];
console.log("String Array:", strArray); // Output: ['apple', 'banana', 'cherry']

// 3. Mixed Array using Union Types
const mixedArray = [1, "apple", 2, "banana"];
console.log("Mixed Array:", mixedArray); // Output: [1, 'apple', 2, 'banana']

// 4. Multi-dimensional Arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix (2D Array):", matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// 5. Array Methods
numArray.push(6);
console.log("After push:", numArray); // Output: [1, 2, 3, 4, 5, 6]

const lastElement = numArray.pop();
console.log("Popped Element:", lastElement); // Output: 6
console.log("After pop:", numArray); // Output: [1, 2, 3, 4, 5]

const doubledArray = numArray.map((num) => num * 2);
console.log("Doubled Array:", doubledArray); // Output: [2, 4, 6, 8, 10]

// 6. Array of Objects
const personArray = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
console.log("Person Array:", personArray); // Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// 7. Array Destructuring
const [firstFruit, secondFruit] = strArray;
console.log("First Fruit:", firstFruit); // Output: 'apple'
console.log("Second Fruit:", secondFruit); // Output: 'banana'

// 8. Tuple-like Arrays
const tupleArray = [
  [1, "Alice"],
  [2, "Bob"],
];
console.log("Tuple Array:", tupleArray); // Output: [[1, 'Alice'], [2, 'Bob']]

// 9. Readonly-like Arrays (no direct readonly in JS, just don't modify)
const readonlyArray = [10, 20, 30];
console.log("Readonly Array:", readonlyArray); // Output: [10, 20, 30]

// 10. Array Length Property
console.log("Number Array Length:", numArray.length); // Output: 5
