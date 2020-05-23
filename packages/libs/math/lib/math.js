"use strict";

const math = {
  sum(...numbers) {
    return numbers.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  },
};

module.exports = math;
