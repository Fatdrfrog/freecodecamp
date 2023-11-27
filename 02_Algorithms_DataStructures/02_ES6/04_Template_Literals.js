// Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  const failureItems = arr.map((el) => `<li class="text-warning">${el}</li>`);
  return failureItems;
}

const failuresList = makeList(result.failure);

// Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};

// Concise Declarative Functions with ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

