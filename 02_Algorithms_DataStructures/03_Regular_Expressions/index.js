// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result2 = waldoRegex.test(waldoIsHiding);

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);

// Ingnore case
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result4 = fccRegex.test(myString);

