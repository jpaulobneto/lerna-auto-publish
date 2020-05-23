"use strict";

const math = require("@jpaulobneto/math");

module.exports = calc;

function calc(operationName, ...numbers) {
  switch (operationName) {
  case 'sum':
    return math.sum(...numbers);
  case 'sub':
    return math.sub(...numbers);
  default:
    console.log(`Sorry, we are out of ${operationName}.`);
  }
}
