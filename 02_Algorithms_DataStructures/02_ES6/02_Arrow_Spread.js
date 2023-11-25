
// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => {
    return new Date();
  };
  
  // Write Arrow Functions with Parameters
  const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  // Set Default Parameters for Your Functions
  const increment = (number, value = 1) => number + value;
  
  // Use the Rest Parameter with Function Parameters
  const sum = (...args) => {
      let total = 0;
      for (let i = 0; i < args.length; i++) {
        total += args[i];
      }
      return total;
    }
  
  // Use the Spread Operator to Evaluate Arrays In-Place
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  arr2 = [...arr1]; 
  