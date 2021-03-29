const CustomError = require("../extensions/custom-error");
let arr = [];

const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
   arr.push('( ' + String(value) + ' )');
    return chainMaker;
  },
  removeLink(position) {
    if (isNaN(position) || position > chainMaker.getLength() || position == 0) {
      arr = [];
      throw Error();
    }
    
    arr.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    arr.reverse();
    return chainMaker;
  },
  finishChain() {
    let str = arr.join('~~');
    arr = [];
    return str;
  }
};

module.exports = chainMaker;
