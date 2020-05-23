"use strict";

const math = require("..");

describe("math", () => {
  describe(".sum", () => {
    it("returns the sum of passed numbers", () => {
      expect(math.sum(1, 2, 3, 4, 5)).toEqual(15);
    });
  });

  describe(".sub", () => {
    it('return the sub of passed numbers', () => {
      expect(math.sub(0, 1, 2, 3, 4, 5)).toEqual(-15);
    });
  });
});
