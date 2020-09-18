const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let count = 0;
    backyard.forEach(item => {
        item.forEach(elem => (elem === '^^') ? count++ : null)
    });
    return count
};
