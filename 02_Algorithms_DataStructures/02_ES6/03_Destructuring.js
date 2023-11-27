// Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow } = HIGH_TEMPERATURES;

// Assign Variables from Objects
  const {today:highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Assign Variables from Nested Objects
const {today:{low:lowToday2,high:highToday2}} = LOCAL_FORECAST;

// Assign Variables from Arrays
let a = 8, b = 6;
 [b,a] = [a,b]

// Destructuring via rest elements
function removeFirstTwo(list) {
  const [a1,b1,...newList] = list;
  return newList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// Pass an Object as a Function's Parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max,min}) => (max + min) / 2.0; 