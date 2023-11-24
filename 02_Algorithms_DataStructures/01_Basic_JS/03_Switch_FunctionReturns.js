// Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      return "alpha";
    case 2:
      return "beta";
    case 3:
      return "gamma";
    case 4:
      return "delta";
  }
  return answer;
}

caseInSwitch(1);

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  switch (val) {
    case "a":
      return "apple";
    case "b":
      return "bird";
    case "c":
      return "cat";
    default:
      return "stuff";
  }
}

switchOfStuff(1);

//   Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
    case 4:
    case 5:
    case 6:
      return "Mid";
    case 7:
    case 8:
    case 9:
      return "High";
  }
}
sequentialSizes(1);

// Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
chainToSwitch(7);

// Returning Boolean Values from Functions
function isLess(a, b) {
  return a < b;
}
isLess(10, 15);

// Return Early Pattern for Functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2, 2);
