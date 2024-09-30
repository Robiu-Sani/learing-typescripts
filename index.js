"use strict";
console.log("testing");
// Number type: It holds numeric values.
const num = 5454; // This variable holds a number (integer or float).
// String type: It holds text values.
const str = "Hello, TypeScript"; // This variable holds a string value.
// Boolean type: It holds true or false values.
const isTrue = true; // This is a boolean value, either true or false.
// Array of numbers: This array contains only numbers.
const arr = [1, 2, 3]; // An array that holds numbers.
// Array of strings: This array contains only strings.
const strArr = ["one", "two", "three"]; // An array that holds strings.
// Tuple type: A fixed-length array with specified types for each element.
const tuple = [1, "one"]; // The first element is a number, the second is a string.
// Enum type: Enum allows you to define a set of named constants.
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
const color = Colors.Green; // You can refer to a specific value from the enum.
// Any type: Can hold any type of data (not recommended for type safety).
let something = "Hello"; // Initially a string.
something = 42; // Now reassigned to a number, because it's of type `any`.
// Void type: Usually used for functions that don't return a value.
function logMessage() {
    console.log("Logging a message"); // This function doesn't return anything.
}
// Null type: Holds a `null` value (no value).
const nullValue = null; // Represents a null value.
// Undefined type: Holds an `undefined` value (variable is declared but not initialized).
const undefinedValue = undefined; // Represents an undefined value.
// Object type: Holds an object with specific properties and types.
const obj = { name: "John", age: 30 }; // Object with a name (string) and age (number).
// Union type: A variable that can hold one of multiple types.
let multiType = "Hello"; // Can hold a string or a number.
multiType = 42; // Now holds a number.
// Literal type: Restricts the value to a specific literal.
const direction = "left"; // Can only be "left" or "right".
// Unknown type: Similar to `any`, but you need to assert the type before using it.
let unknownValue = 10; // Type is unknown, and requires type-checking before usage.
// Never type: Used for functions that never return (e.g., throw an error or infinite loops).
function throwError(message) {
    throw new Error(message); // This function never returns, it throws an error.
}
