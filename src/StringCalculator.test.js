const StringCalculator = require("./StringCalculator");

describe("String Calculator", () => {
  beforeEach(() => {
    const { add } = StringCalculator;
    this.add = add;
  });

  describe("String Calculator Task 1", () => {
    it("add() with empty string should return 0", () => {
      expect(this.add("")).toBe(0);
    });

    it("add() with one numbers's string should return the number itself", () => {
      expect(this.add("3")).toBe(3);
    });

    it("add() with two numbers's string should return sum of two numbers", () => {
      expect(this.add("3,4")).toBe(3 + 4);
    });

    it("defines add()", () => {
      expect(typeof this.add).toBe("function");
    });
  });

  describe("String Calculator Task 2", () => {
    it("add() with unknown amount of number's string should return sum of all numbers", () => {
      expect(this.add("4,2,54,26,2,4,6,2,12")).toBe(
        4 + 2 + 54 + 26 + 2 + 4 + 6 + 2 + 12
      );
    });
  });

  describe("String Calculator Task 3", () => {
    it("Allow alphabets to be included with numbers in add() method", () => {
      expect(this.add("4,2,a,b,c,d")).toBe(16);
    });
  });

  describe("String Calculator Task 4", () => {
    it("throws an error when any argument is negative number in add() method", () => {
      expect(() => this.add("2,5,-6")).toThrow(Error);
      expect(() => this.add("12,3,-5")).toThrow(
        new Error(`Negatives not allowed: (-5)`)
      );
    });
  });

  describe("String Calculator Task 5", () => {
    it("If there are multiple negatives, show all of them in the exception message in add() method", () => {
      expect(() => this.add("2,-5,-6")).toThrow(Error);
      expect(() => this.add("-12,3,-5,1,-4")).toThrow(
        new Error(`Negatives not allowed: (-12,-5,-4)`)
      );
    });
  });

  describe("String Calculator Task 6", () => {
    it("Numbers bigger than 1000 should be ignored in add() method", () => {
      expect(this.add("4,2,54,1000,1001,2,12,a")).toBe(
        4 + 2 + 54 + 1000 + 2 + 12 + 1
      );
    });
  });
});
