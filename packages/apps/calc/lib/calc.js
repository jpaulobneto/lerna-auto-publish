"use strict";

const math = require("@jpaulobneto/math");

module.exports = calc;

function calc(operationName, ...numbers) {
  switch (operationName) {
  case 'sum':
    return math.sum(...numbers);
  case 'sub':
    return math.sub(...numbers);
  case 'multi':
    return math.multi(...numbers);
  default:
    console.log(`Ops! We are out of ${operationName}.`);
  }
}
