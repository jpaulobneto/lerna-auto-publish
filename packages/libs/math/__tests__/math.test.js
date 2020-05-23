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

  describe(".multi", () => {
    describe("when multiply a range of numbers", () => {
      it('returns the result correctly', () => {
        expect(math.multi(1, 2, 3, 4, 5)).toEqual(120);
      });
    });

    describe("when multiply by 0", () => {
      it('returns 0', () => {
        expect(math.multi(1, 2, 3, 0, 4, 5)).toEqual(0);
      });
    });
  });
});
