const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let lettersArr = [];
  members.forEach(person => typeof person === "string" ? lettersArr.push(person.trim()[0].toUpperCase()) : null);
  return lettersArr.sort().join('');
};
