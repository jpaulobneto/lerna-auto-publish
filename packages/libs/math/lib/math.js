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
};

module.exports = math;
