// Restrict Possible Usernames
// - Usernames can only use alphanumeric characters.
// - The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// - Username letters can be lowercase and uppercase.
// - Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

let username = "JACK";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = username.match(userCheck);

console.log(result);
