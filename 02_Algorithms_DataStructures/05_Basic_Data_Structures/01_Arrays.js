// Use an Array to Store a Collection of Data
let yourArray = [5, 5, 3, false, "tr"];

// Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1] = "fas";
console.log(myArray);

// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"]));

// Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

// Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

// Add Items Using splice()
function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// Copy Array Items Using slice()
function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
console.log(spreadOut());

// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) !== -1) return true;
  return false;
}
console.log(quickCheck(["onions", "squash", "shallots"], "onions"));

// Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === elem) {
        newArr.pop();
      }
    }
  }
  return newArr;
}

console.log(
  filteredArray(
    [
      ["trumpets", 2],
      ["flutes", 4],
      ["saxophones", 2],
    ],
    2
  )
);

