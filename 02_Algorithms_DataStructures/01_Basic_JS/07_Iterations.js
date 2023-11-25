// Iterate with While Loops
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

// Iterate with For Loops
const myArray2 = [];
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

// Iterate Odd Numbers With a For Loop
const myArray3 = [];
for (let i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

// Count Backwards With a For Loop
const myArray4 = [];
for (let i = 9; i >= 1; i -= 2) {
  myArray.push(i);
}

// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

// Iterate with JavaScript Do...While Loops
const myArray5 = [];
let i2 = 10;
do {
  myArray.push(i);
  i2++;
} while (i2 < 5);

// Replace Loops using Recursion
function sum(arr, n) {
  if (n <= 0) return 0;
  return sum(arr, n - 1) + arr[n - 1];
}
