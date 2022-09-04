const StringCalculator = require("./StringCalculator");

describe("String Calculator", () => {
  describe("String Calculator Task 1", () => {
    beforeEach(() => {
      const { add } = StringCalculator;
      this.add = add;
    });

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
      expect(StringCalculator.add("4,2,54,26,2,4,6,2,12")).toBe(
        4 + 2 + 54 + 26 + 2 + 4 + 6 + 2 + 12
      );
    });
  });
});
