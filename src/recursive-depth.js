const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    
    let arrOfArrays = [];
    arr.forEach(item => Array.isArray(item) ? arrOfArrays.push(item) : null)

    for (let item of arr) {
        let depth = this.calculateDepth(item) + 1;
        if (depth > count) {
            count = depth + 1
        }
        return count;
    }
  }
};
