// Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; 
let replaceText = "$3 $2 $1"; 
let result = str.replace(fixRegex, replaceText);
console.log("Use Capture Groups to Search and Replace: ", result);

// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result2 = hello.replace(wsRegex,"");
console.log("Remove Whitespace from Start and End: ", result2);

