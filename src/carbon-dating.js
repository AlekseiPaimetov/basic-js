const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  let inputNumber = parseFloat(sampleActivity);
  if (isNaN(inputNumber)) {
    return false;
  }

  if (inputNumber > 15 || inputNumber <= 0) {
    return false;
  }

  let kof = 0.693/HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/inputNumber)/kof);
};
