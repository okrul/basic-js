const CustomError = require("../extensions/custom-error");
const arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const makeSq = (arr) => {
  let arrSq = [arr.length];
  for (let i = 0; i < arr.length; i++) {
    let arr2 = [arr.length];
    for (j = 0; j < arr.length; j++) {
     
      arr2[j] = i+j >= arr.length ? arr[i+j-arr.length]: arr[i+j];
    }
    arrSq[i] = arr2; 
  }
  return arrSq;
};
const square = makeSq(arr);
class VigenereCipheringMachine {
  encrypt(message, key) {
    if (message === undefined || key === undefined||message.length == 0 || key.length == 0) {
      throw Error();
    }
    let newMessage = '';
      let j = 0;
      for (i = 0; i < message.length; i++) {
        let char = message[i].toUpperCase();
        
        if (arr.indexOf(char) == -1) {
          newMessage = newMessage + char;
        }
        else {
          let keychar = key[j].toUpperCase();  
          newMessage = newMessage + square[arr.indexOf(char)][arr.indexOf(keychar)];
          j = j == key.length - 1 ? 0 : j+1; 
        }
  }    
    return newMessage;
  }    
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined ||encryptedMessage.length == 0 || key.length == 0) {
      throw Error();
    }

    let newMessage = '';
    let j = 0;

    
      for (i = 0; i < encryptedMessage.length; i++) {
        let char = encryptedMessage[i].toUpperCase();
        
        if (arr.indexOf(char) == -1) {
          newMessage = newMessage + char;
        }
        else {
          let keychar = key[j].toUpperCase();  
          newMessage = newMessage + arr[square[arr.indexOf(keychar)].indexOf(char)];
          j = j == key.length - 1 ? 0 : j+1; 
        }
      }

    return newMessage;
  }
}

module.exports = VigenereCipheringMachine;
