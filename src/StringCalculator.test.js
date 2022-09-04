const StringCalculator = require("./StringCalculator");

describe("String Calculator Task 1", () => {
  beforeEach(() => {
    const { add } = StringCalculator;
    this.add = add;
  });

  it("add() with empty string should return 0", () => {
    expect(this.add("")).toBe(0);
  });

  it("add() with one numbers string should return the number itself", () => {
    expect(this.add("3")).toBe(3);
  });

  it("add() with two numbers string should return sum of two numbers", () => {
    expect(this.add("3,4")).toBe(7);
  });

  it("defines add()", () => {
    expect(typeof this.add).toBe("function");
  });
});
