// Array in TypeScript: Arrays are used to store multiple values in a single variable.
// It is one of the most common data structures used to hold collections of items.

console.log("Array in TypeScript");

// 1. Basic Array of Numbers
// This array holds a list of numbers (numeric values).
const numArray: number[] = [1, 2, 3, 4, 5];
console.log("Number Array:", numArray); // Output: [1, 2, 3, 4, 5]

// Why use arrays?
// Arrays let you group values together into a single structure that can be easily accessed, manipulated, and iterated over.

// 2. Array of Strings
// This array holds a list of strings (text values).
const strArray: string[] = ["apple", "banana", "cherry"];
console.log("String Array:", strArray); // Output: ['apple', 'banana', 'cherry']

// 3. Mixed Array using Union Types
// An array can hold multiple types if declared with a union type.
const mixedArray: (number | string)[] = [1, "apple", 2, "banana"];
console.log("Mixed Array:", mixedArray); // Output: [1, 'apple', 2, 'banana']

// 4. Multi-dimensional Arrays
// Arrays of arrays can be created to represent multi-dimensional data (e.g., a matrix).
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix (2D Array):", matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Why use multi-dimensional arrays?
// Multi-dimensional arrays are useful when working with grids, tables, or matrices, where data is organized in rows and columns.

// 5. Array Methods
// TypeScript supports all common JavaScript array methods like `push`, `pop`, `map`, `filter`, `reduce`, etc.

// Example: `push` method (adds elements to the end of the array)
numArray.push(6);
console.log("After push:", numArray); // Output: [1, 2, 3, 4, 5, 6]

// Example: `pop` method (removes the last element from the array)
const lastElement = numArray.pop();
console.log("Popped Element:", lastElement); // Output: 6
console.log("After pop:", numArray); // Output: [1, 2, 3, 4, 5]

// Example: `map` method (applies a function to each element in the array)
const doubledArray = numArray.map((num) => num * 2);
console.log("Doubled Array:", doubledArray); // Output: [2, 4, 6, 8, 10]

// Why use array methods?
// Array methods provide powerful ways to manipulate and transform arrays without writing repetitive loops.

// 6. Typed Arrays with Interfaces
// You can create arrays of custom objects by defining their structure using interfaces.

interface Person {
  name: string;
  age: number;
}

// Array of objects of type `Person`
const personArray: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
console.log("Person Array:", personArray);
// Output: [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// 7. Array Destructuring
// Array destructuring allows extracting multiple values from an array and assigning them to variables.

const [firstFruit, secondFruit] = strArray;
console.log("First Fruit:", firstFruit); // Output: 'apple'
console.log("Second Fruit:", secondFruit); // Output: 'banana'

// Why use destructuring?
// Destructuring makes it easy to extract specific values from arrays, reducing code verbosity and improving readability.

// 8. Tuple Arrays
// Tuples are fixed-length arrays where each element can have a different type. Useful when you want specific, typed entries in an array.

const tupleArray: [number, string][] = [
  [1, "Alice"],
  [2, "Bob"],
];
console.log("Tuple Array:", tupleArray); // Output: [[1, 'Alice'], [2, 'Bob']]

// Why use tuples?
// Tuples are great for fixed-size arrays where each position has a known type, providing better type safety and clarity in your code.

// 9. Readonly Arrays
// You can declare an array as `readonly` to prevent any modifications to the array's elements after initialization.

const readonlyArray: readonly number[] = [10, 20, 30];
// readonlyArray.push(40); // Error: Property 'push' does not exist on type 'readonly number[]'
console.log("Readonly Array:", readonlyArray); // Output: [10, 20, 30]

// Why use readonly arrays?
// Readonly arrays ensure that the data cannot be modified, adding a layer of protection in your code for arrays that should remain constant.

// 10. Array Length Property
// The `length` property returns the number of elements in an array.

console.log("Number Array Length:", numArray.length); // Output: 5

// Why use the `length` property?
// The length property is useful when you need to know how many items are in an array or when iterating through arrays in loops.
