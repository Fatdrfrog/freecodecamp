// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
console.log("Match Whitespace: ", result);

// Match Non-Whitespace Characters
let countNonWhiteSpace = /\S/g;
let result2 = sample.match(countNonWhiteSpace);
console.log("Match Non-Whitespace Characters: ", result2);

// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result3 = ohRegex.test(ohStr);
console.log("Specify Upper and Lower Number of Matches: ", result3);

// Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result4 = haRegex.test(haStr);
console.log("Specify Only the Lower Number of Matches: ", result4);

// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result5 = timRegex.test(timStr);
console.log("Specify Exact Number of Matches: ", result5);

// Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/;
let result6 = favRegex.test(favWord);
console.log("Check for All or None: ", result6);

// Positive and Negative Lookahead
let sampleWord = "bana12";
let pwRegex = /(?=\w{6,})(?=\D*\d{2})/;
let result7 = pwRegex.test(sampleWord);
console.log("Positive and Negative Lookahead: ", result7);

// Check For Mixed Grouping of Characters
let myString = "Franklin D. Roosevelt";
let myRegex = /(Eleanor|Franklin\D*) Roosevelt/;
let result8 = myRegex.test(myString);
console.log("Check For Mixed Grouping of Characters: ", result8);

// Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result9 = reRegex.test(repeatNum);
console.log("Reuse Patterns Using Capture Groups: ", result9);
