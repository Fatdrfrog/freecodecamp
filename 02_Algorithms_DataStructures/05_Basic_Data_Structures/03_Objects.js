// Add Key-Value Pairs to JavaScript Objects
const foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

// Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

// Access Property Names with Bracket Notation

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples"));

// Use the delete Keyword to Remove Object Properties

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

// Check if an Object has a Property
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  if (
    userObj.hasOwnProperty("Alan") &&
    userObj.hasOwnProperty("Jeff") &&
    userObj.hasOwnProperty("Sarah") &&
    userObj.hasOwnProperty("Ryan")
  )
    return true;
  return false;
}

console.log(isEveryoneHere(users));

// Iterate Through the Keys of an Object with a for...in Statement
function countOnline(allUsers) {
  let num = 0;
  for (const user in allUsers) {
    if (allUsers[user].online) {
      num++;
    }
  }
  return num;
}

console.log(countOnline(users));

// Generate an Array of All Object Keys with Object.keys()

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

// Modify an Array Stored in an Object
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, "Pete"));
