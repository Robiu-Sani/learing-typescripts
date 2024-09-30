console.log("testing");
var num = 5454;
var str = "Hello, TypeScript";
var isTrue = true;
var arr = [1, 2, 3]; // Array of numbers
var strArr = ["one", "two", "three"]; // Array of strings
var tuple = [1, "one"];
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
var color = Colors.Green;
var something = "Hello";
something = 42;
function logMessage() {
    console.log("Logging a message");
}
var nullValue = null;
var undefinedValue = undefined;
var obj = { name: "John", age: 30 };
var multiType = "Hello";
multiType = 42;
var direction = "left";
var unknownValue = 10;
function throwError(message) {
    throw new Error(message);
}
var bigInt = 9007199254740991n;
