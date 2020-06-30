const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let onlyStrings = members.filter(el => typeof el === "string").map(el => el.trim());

  if (onlyStrings === null) {
    return false;
  }

  return onlyStrings.map(el => el[0].toUpperCase()).sort().join('');
};
