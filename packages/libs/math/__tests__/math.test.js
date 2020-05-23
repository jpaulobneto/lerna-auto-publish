"use strict";

const math = require("..");

describe("math", () => {
  describe(".sum", () => {
    it("returns the sum of passed numbers", () => {
      expect(math.sum(1, 2, 3, 4, 5)).toEqual(15);
    });
  });
});
