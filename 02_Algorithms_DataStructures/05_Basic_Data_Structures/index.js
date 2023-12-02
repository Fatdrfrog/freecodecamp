// Use an Array to Store a Collection of Data
let yourArray = [5,5,3, false, "tr"];

// Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[1] ='fas';
console.log(myArray);

// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

// Remove Items from an Array with pop() and shift()
function popShift(arr) {
    let popped = arr.pop(); 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

// Remove Items Using splice()
