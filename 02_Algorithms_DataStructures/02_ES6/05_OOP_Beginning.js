// class Syntax to Define a Constructor Function\
class Vegetable{
    constructor(name){
      this.name = name;
    }
  }
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 

  // Use getters and setters to Control Access to an Object
  class Thermostat{
  constructor(temp){
    this._temp = temp;
  }

  get temperature(){
    return 5/9 * (this._temp - 32);
  }

  set temperature(c){
    this._temp = c * 9/5 + 32;
  }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;