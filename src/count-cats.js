const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let regexp = /^\^\^$/; 
  
  let count = 0;
  matrix.forEach(element => {
    count = count + element.reduce((sum, val) => sum + regexp.test(val), 0);
  }); 
  return count;
  // remove line with error and write your code here
};
