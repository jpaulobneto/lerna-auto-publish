"use strict";

const calc = require("..");

describe("calc", () => {
  describe("when operation is sum", () => {
    it("returns the sum of passed numbers", () => {
      expect(calc("sum", 1, 2, 3, 4)).toEqual(10);
    });

    it("returns the sub of passed numbers", () => {
      expect(calc("sub", 0, 1, 2, 3, 4)).toEqual(-10);
    });

    describe("when multi", () => {
      it("returns the multi of passed numbers", () => {
        expect(calc("multi", 1, 2, 3, 4, 5)).toEqual(120);
      });
    });

    describe("when divi", () => {
      it("returns the division of passed numbers", () => {
        expect(calc("divi", 100, 2, 5, 2.5)).toEqual(4);
      });
    });
  });
});
