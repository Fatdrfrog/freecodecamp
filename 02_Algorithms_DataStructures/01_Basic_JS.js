// Nth character
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myNoun + " " + myAdjective + " " + myVerb + " " + myAdverb;

// Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["hello", 42];

// Nest one Array within Another Array
const myArray2 = [
  ["Hello", 42],
  ["there", 24],
];

// Access Array Data with Indexes
const myArray3 = [50, 60, 70];
const myData = myArray[0];

// Modify Array Data With Indexes
const myArray4 = [18, 64, 99];
myArray[0] = 45;

// Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData2 = myArray[2][1];

// Manipulate Arrays With push Method
const myArray = [
  ["John", 23],
  ["cat", 2],
];
myArray.push(["dog", 3]);

// Manipulate Arrays With pop Method
const myArray = [
  ["John", 23],
  ["cat", 2],
];
const removedFromMyArray = myArray.pop();

// Manipulate Arrays With shift Method
const myArray = [
  ["John", 23],
  ["dog", 3],
];
const removedFromMyArray2 = myArray.shift();

// Manipulate Arrays With unshift Method
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Shopping List
const myList = [
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
  ["Chocolate Bar", 15],
];

// Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(1, 5);

// Return a Value from a Function with Return
function timesFive(param1) {
  return param1 * 5;
}
timesFive(6);

// Global Scope and Functions
const myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
  const myVar = 4;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();
console.log("outside myLocalScope", myVar);

// Global vs. Local Scope in Functions
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
myOutfit();

// Understanding Undefined Value returned from a Function
let sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum = sum + 5;
}
addThree();
addFive();

// Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// Stand in Line
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Understanding Boolean Values
function welcomeToBooleans() {
  return true;
}

// Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// Comparison with the Equality Operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

// Comparison with the Strict Equality Operator
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// Practice comparing different values
function compareEquality(a, b) {
    if (a === b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10");

