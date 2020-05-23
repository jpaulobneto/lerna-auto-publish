"use strict";

const math = {
  sub(...numbers) {
    return numbers.reduce(
      (previousValue, currentValue) => {
        if (previousValue == null) return currentValue;
        return previousValue - currentValue;
      }
    );
  },
  sum(...numbers) {
    return numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  },
  multi(...numbers) {
    return numbers.reduce(
      (previousValue, currentValue) => previousValue * currentValue,
      1
    );
  },
  divi(...numbers) {
    return numbers.reduce(
      (previousValue, currentValue) => {
        if (previousValue == null) return currentValue;
        if (currentValue == 0) throw new Error("Division by 0!");

        return previousValue / currentValue;
      }
    );
  }
};

module.exports = math;
