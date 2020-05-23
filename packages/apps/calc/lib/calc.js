"use strict";

const math = require("@jpaulobneto/math");

module.exports = calc;

function calc(operation, ...numbers) {
  return math[operation](...numbers);
}
