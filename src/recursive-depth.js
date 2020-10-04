const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let maxDepth = 1; // max depth of array
        let currentDepth = 1; // count depth of subarray
        arr.forEach(item => {
            if (Array.isArray(item)) {
                currentDepth = this.calculateDepth(item) + 1;
                maxDepth = Math.max(maxDepth, currentDepth)
            }
        });
        return maxDepth
    }
};