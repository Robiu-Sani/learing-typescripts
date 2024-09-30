"use strict";
console.log("testing");

// Number type
const num = 5454;

// String type
const str = "Hello, JavaScript";

// Boolean type
const isTrue = true;

// Array of numbers
const arr = [1, 2, 3];

// Array of strings
const strArr = ["one", "two", "three"];

// Tuple type
const tuple = [1, "one"];

// Enum type
var Colors;
(function (Colors) {
  Colors[(Colors["Red"] = 0)] = "Red";
  Colors[(Colors["Green"] = 1)] = "Green";
  Colors[(Colors["Blue"] = 2)] = "Blue";
})(Colors || (Colors = {}));
const color = Colors.Green;

// Any type
let something = "Hello";
something = 42;

// Void type
function logMessage() {
  console.log("Logging a message");
}

// Null type
const nullValue = null;

// Undefined type
const undefinedValue = undefined;

// Object type
const obj = { name: "John", age: 30 };

// Union type
let multiType = "Hello";
multiType = 42;

// Literal type
const direction = "left";

// Unknown type
let unknownValue = 10;

// Never type
function throwError(message) {
  throw new Error(message);
}

const bigInt = 9007199254740991n; // Big integer value
