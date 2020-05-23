"use strict";

const calc = require("..");

describe("calc", () => {
  describe("when operation is sum", () => {
    it("returns the sum of passed numbers", () => {
      expect(calc("sum", 1, 2, 3, 4)).toEqual(10);
    });
  });
});
