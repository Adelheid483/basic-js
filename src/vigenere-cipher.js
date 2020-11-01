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
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let k = count % key.length;
        count++;
        let char = message.charCodeAt(i) + key.charCodeAt(k) - 65;
        if (char > 90 || char < 65) {
          char = char - 26;
        }
        result.push(String.fromCharCode(char));
      } else {
        result.push(message[i]);
      }
    }

    return this.mode ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Arguments not found');

    message = message.toUpperCase();
    key = key.toUpperCase();
    while (key.length < message.length) {
      key += key;
    }
    key = key.substr(0, message.length);

    let result = [];
    let count = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        let k = count % key.length;
        count++;
        let char = message.charCodeAt(i) - key.charCodeAt(k) + 65;
        if (char < 65 || char > 90) {
          char = char + 26;
        }
        result.push(String.fromCharCode(char));
      } else {
        result.push(message[i]);
      }
    }

    return this.mode ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
