first you have to install typescripts
```
npm install -g typescript
```
after that 
```
tsc init
```
and then ! in tsconfig.json file, un comment    // "noEmitOnError": true 
after that update thislene by 2020 //   "target": "es2020"

### data type
- Number type: It holds numeric values.This variable holds a number (integer or float).
```
const num: number = 5454;
```
- String type: It holds text values.This variable holds a string value.
```
const str: string = "Hello, TypeScript";
```
- Boolean type: It holds true or false values.This is a boolean value, either true or false.
```
const isTrue: boolean = true;
```
- Array of numbers: This array contains only numbers.An array that holds numbers.
```
const arr: number[] = [1, 2, 3];
```
- Array of strings: This array contains only strings.An array that holds strings.
```
const strArr: string[] = ["one", "two", "three"];
```
- Tuple type: A fixed-length array with specified types for each element.The first element is a number, the second is a string.
```
const tuple: [number, string] = [1, "one"];
```
- Enum type: Enum allows you to define a set of named constants.You can refer to a specific value from the enum.
```
enum Colors {
  Red, 
  Green, 
  Blue, 
}
const color: Colors = Colors.Green;
```
- Any type: Can hold any type of data (not recommended for type safety).Initially a string.Now reassigned to a number, because it's of type `any`
```
let something: any = "Hello";
something = 42; 
```
- Void type: Usually used for functions that don't return a value.This function doesn't return anything.
```
function logMessage(): void {
  console.log("Logging a message"); 
}
```
- Null type: Holds a `null` value (no value).Represents a null value.
```
const nullValue: null = null;
```
- Undefined type: Holds an `undefined` value (variable is declared but not initialized).Represents an undefined value.
```
const undefinedValue: undefined = undefined;
```
- Object type: Holds an object with specific properties and types.Object with a name (string) and age (number).
```
const obj: { name: string; age: number } = { name: "John", age: 30 };
```
- Union type: A variable that can hold one of multiple types.Can hold a string or a number.Now holds a number.
```
let multiType: string | number = "Hello";
multiType = 42;
```
- Literal type: Restricts the value to a specific literal.Can only be "left" or "right".
```
const direction: "left" | "right" = "left";
```
- Unknown type: Similar to `any`, but you need to assert the type before using it.Type is unknown, and requires type-checking before usage.
```
let unknownValue: unknown = 10;
```
- Never type: Used for functions that never return (e.g., throw an error or infinite loops).This function never returns, it throws an error.
```
function throwError(message: string): never {
  throw new Error(message); 
}
```
- Never type: Used for functions that never return (e.g., throw an error or infinite loops).This function never returns, it throws an error.
```
function throwError(message: string): never {
  throw new Error(message); 
}
```
- bigInt : A big integer value (n is required at the end for BigInt).
```
const bigInt: bigint = 9007199254740991n;
```








