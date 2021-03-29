const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  //throw new CustomError('Not implemented');
  if (typeof sampleActivity != 'string') {
    return false;
  }

  let num  =  parseFloat(sampleActivity);
  if (isNaN(num) || num <= 0 || num > MODERN_ACTIVITY) {
    return false;
  }

  return  Math.ceil(Math.log(MODERN_ACTIVITY/num)/(Math.log(2)/HALF_LIFE_PERIOD));

  return num;
};
