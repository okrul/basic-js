const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw Error('It is not Array');
  }

  let newArr = [];
  let rem = false;
  let dbl = false;
  let prev = undefined;
  arr.forEach(element => {
    switch (element) {
       case '--discard-next': rem = true;
       case '--discard-prev': if (arr.length > 0 && prev != undefined) {arr.pop()};
       case '--double-next' : dbl = true;
       case '--double-prev' : if (arr.length > 0 && prev != undefined)  {
         arr.push(arr[arr.length -1])
        }
       default: if (!rem) {
         arr.push(element); 
         if(dbl){
           arr.push(element)
          }
          prev = element; 
        } 
        else {prev = undefined}
        dbl = false; 
        rem = false;  
    }
  });

  return newArr;
};
