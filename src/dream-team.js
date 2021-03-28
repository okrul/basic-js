const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let name = '';
  members.forEach(element => {
    if (typeof element == 'string' && element.trim().length > 0) {
      name = name + element.trim()[0].toUpperCase();
    }
  });

  return name.length = 0?false:Array.from(name).sort().reduce((str, val) =>str + val, '');

};
