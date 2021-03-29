const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let rStr = String(str);
  let repeatTimes  = options['repeatTimes'] === undefined ? 0 : options['repeatTimes'];
  
  let separator  = options['separator'] === undefined?'+':options['separator'];
  
  let addition = options['addition'] === undefined ? '' : String(options['addition']);
  let additionRepeatTimes  = options['additionRepeatTimes'] === undefined ? 0 : options['additionRepeatTimes'];

  if (additionRepeatTimes > 1) {
    let additionSeparator = options['additionSeparator'] === undefined?'|':options['additionSeparator'];
    let addition1 = addition;
    for (i = 1; i < additionRepeatTimes; i++) {
      addition = addition + additionSeparator + addition1;
    }
  }

  rStr = rStr + addition;
  let rStr1 = rStr;
  for (i = 1; i < repeatTimes; i++) {
    rStr = rStr + separator + rStr1;
  } 
  

  return rStr;

  
};
  