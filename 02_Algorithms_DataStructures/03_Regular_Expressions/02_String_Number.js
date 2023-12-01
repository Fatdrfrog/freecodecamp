// Find One or More Criminals in a Hunt
let reCriminals = /C+/;

// Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log("Match Beginning String Patterns: ",result)

// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result2 = lastRegex.test(caboose);
console.log("Match Ending String Patterns: ",result2)

// Match All Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result3 = quoteSample.match(alphabetRegexV2).length;
console.log("Match All Letters and Numbers: ",result3)

// Match Everything But Letters and Numbers
let nonAlphabetRegex = /\W/g; 
let result4 = quoteSample.match(nonAlphabetRegex).length;
console.log("Match Everything But Letters and Numbers: ",result4)

// Match All Numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result5 = movieName.match(numRegex).length;
console.log("Match All Numbers: ",result5)

// Match All Non-Numbers
let noNumRegex = /\D/g; 
let result6 = movieName.match(noNumRegex).length;
console.log("Match All Non-Numbers: ",result6)

