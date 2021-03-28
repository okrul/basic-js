const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  

  let minT = Math.pow(2, disksNumber) - 1;
  let minS = Math.trunc(minT/turnsSpeed*3600);
  return {'turns':minT, 'seconds':minS};
};
