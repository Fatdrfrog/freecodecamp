// Build JavaScript Objects
const myDog = {
  name: "Ginger",
  legs: 4,
  tails: 1,
  friends: [1, 4],
};

// Accessing Object Properties with Dot Notation
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};
const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// Accessing Object Properties with Bracket Notation
const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

// Accessing Object Properties with Variables
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};
const playerNumber = 16;
const player = testObj[playerNumber];

// Updating Object Properties
const myDog2 = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.name = "Happy Coder";

// Add New Properties to a JavaScript Object
const myDog3 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog["bark"] = "woof";

// Delete Properties from a JavaScript Object
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete myDog.tails;

// Using Objects for Lookups
function phoneticLookup(val) {
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  return lookup[val];
}
phoneticLookup("charlie");

// Testing Objects for Properties
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  return "Not Found";
}

// Manipulating Complex Objects
const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "123",
    title: "423",
    release_year: 1454,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
];

// Accessing Nested Objects
const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};
const gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];
const secondTree = myPlants[1].list[1];
