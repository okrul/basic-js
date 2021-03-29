const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let depth = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        depth = Math.max(depth, 1 + this.calculateDepth(element));
      }
    }); 
    return depth;
  }
};