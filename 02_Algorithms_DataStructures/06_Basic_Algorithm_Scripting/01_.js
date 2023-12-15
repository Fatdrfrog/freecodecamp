// Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertCtoF(30);

// Reverse a string
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

reverseString("hello");

// Factorialize a Number
function factorialize(num) {
  if (num === 1 || num === 0) return 1;
  return factorialize(num - 1) * num;
}

factorialize(5);

// Find the Longest Word in a String
function findLongestWordLength(str) {
  const newStr = str.split(" ");
  let l = 0;
  newStr.forEach((el) => {
    l = Math.max(l, el.length);
  });
  return l;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
