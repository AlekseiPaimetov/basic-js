const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  constructor () {
    this.depth = 1;
    this.currentDepth = 1;
  }

  calculateDepth(arr) {
    if (!Array.isArray(arr)){
      return 0;
    }

    for (let i = 0; i < arr.length; i++ ) {
      if (Array.isArray(arr[i])){
        this.currentDepth++;
        this.calculateDepth(arr[i]);
        if (this.depth < this.currentDepth) {
          this.depth = this.currentDepth;
        }
        this.currentDepth = 1;
      }
    }
    
    return this.depth;
  }

};