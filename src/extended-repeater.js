const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } = options
    str = str.toString();
    addition = addition.toString();

    let addPart = ''; 
    let newStr = ''; 
        
    if (addition && separator) {
      if (additionSeparator) {
          addPart = (addition + additionSeparator).repeat(additionRepeatTimes).slice(0, -additionSeparator.length)
      } else {
          addPart = addition.repeat(additionRepeatTimes)
      }
      newStr = str + addPart + separator
      return newStr.repeat(repeatTimes).slice(0, -separator.length)
    } else if(separator) {
        newStr = str + separator
        return newStr.repeat(repeatTimes).slice(0, -separator.length)
    } else {
        return str.repeat(repeatTimes)
    } 
};
  
