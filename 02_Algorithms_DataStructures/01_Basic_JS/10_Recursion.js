// Coundown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

// Range of Numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  const arr = rangeOfNumbers(startNum, endNum - 1);
  arr.push(endNum);
  return arr;
}
