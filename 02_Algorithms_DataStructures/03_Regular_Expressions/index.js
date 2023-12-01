// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log("Using the Test Method: ", result);

// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);
console.log("Match Literal Strings: ", result2);

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);
console.log("Match a Literal String with Different Possibilities: ", result3);

// Ignore case
let myString2 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result4 = fccRegex.test(myString);
console.log("Ignore case: ", result4);

// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);
console.log("Extract Matches: ", result5);

// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result6 = twinkleStar.match(starRegex);
console.log("Find More Than the First Match: ", result6);

// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result7 = unRegex.test(exampleStr);
console.log("Match Anything with Wildcard Period: ", result7);

// Match Single Character with Multiple Possibilities
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result8 = quoteSample.match(vowelRegex);
console.log("Match Single Character with Multiple Possibilities: ", result8);

// Match Letters of the Alphabet
let alphabetRegex = /[a-z]/gi;
let result9 = quoteSample.match(alphabetRegex);
console.log("Match Letters of the Alphabet: ", result9);

// Match Numbers and Letters of the Alphabet
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi;
let result10 = quoteSample.match(myRegex2);
console.log("Match Numbers and Letters of the Alphabet: ", result10);

// Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]/gi;
let result11 = quoteSample.match(myRegex3);
console.log("Match Single Characters Not Specified: ", result11);

// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi;
let result12 = difficultSpelling.match(myRegex4);
console.log("Match Characters that Occur One or More Times: ", result12);

// Match Characters that Occur Zero or More Times
let chewieQuote = "Aaaaaaaaaaaaaaaaaghx!";
let chewieRegex = /Aa*/;
let result13 = chewieQuote.match(chewieRegex);
console.log("Match Characters that Occur Zero or More Times: ", result13);

// Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.*?>/;
let result14 = text.match(myRegex5);
console.log("Find Characters with Lazy Matching: ", result14);