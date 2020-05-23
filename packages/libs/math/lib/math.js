"use strict";

const math = {
  sub(...numbers) {
    return numbers.reduce(
      (previousValue, currentValue) => {
        if (previousValue == null) return currentValue;
        return previousValue - currentValue
      },
      null
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
  }
};

module.exports = math;
