const CustomError = require("../extensions/custom-error");

const chainMaker = {

  arrString: [],

  getLength() {
    return this.arrString.length;
  },

  addLink(value) {
    typeof value === 'undefined' ? this.arrString.push(`( )~~`) : this.arrString.push(`( ${value} )~~`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number') {
      this.arrString.splice(position - 1, 1);
      return this;
    } else {
      this.arrString = [];
      throw new Error('Incorrect position!');
    }
  },

  reverseChain() {
    this.arrString.reverse();
    return this;
  },

  finishChain() {
    let resultString = this.arrString.join('').slice(0, -2);
    this.arrString = [];
    return resultString;
  }
};

module.exports = chainMaker;
