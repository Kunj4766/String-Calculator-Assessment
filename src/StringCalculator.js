class StringCalculator {
  constructor() {}

  add(stringOfNumbers) {
    let sum = 0;
    if (!!stringOfNumbers) {
      const arrayOfNumbers = stringOfNumbers.split(",");
      sum = arrayOfNumbers.reduce((total, curr) => total + Number(curr), 0);
    }
    return sum;
  }
}

module.exports = new StringCalculator();
