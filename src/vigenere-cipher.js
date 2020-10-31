const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Arguments not found');

    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    key = key.substr(0, message.length);

    let result = [];
    for (let i = 0; i < message.length; i++) {
      let char = message.charCodeAt(i) + (key.charCodeAt(i) - 65);
      if (char > 90) {
        char = 64 + ((key.charCodeAt(i) - 65) - (90 - message.charCodeAt(i)));
      }
      result.push(String.fromCharCode(char));
    }
    return this.mode ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Arguments not found');

    message = message.toUpperCase();
    key = key.toUpperCase();

  }
}

module.exports = VigenereCipheringMachine;
