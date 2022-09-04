const {
  ASCII_CODE_OF_LOWERCASE_A,
  ASCII_CODE_OF_LOWERCASE_Z,
} = require("./constants/app-default");

class StringCalculator {
  constructor() {};

  add(stringOfNumbers) {
    let sumOfAllNumbers = 0;
    if (!!stringOfNumbers) {
      const arrayOfNumbers = stringOfNumbers.split(",");

      sumOfAllNumbers = arrayOfNumbers.reduce((total, currValue) => {
        let currNumber = Number(currValue);
        const currCharCode = currValue.charCodeAt();

        /* check if currValue is lowerCase alphabet or number */
        if (
          currCharCode >= ASCII_CODE_OF_LOWERCASE_A &&
          currCharCode <= ASCII_CODE_OF_LOWERCASE_Z
        ) {
          currNumber = currCharCode - (ASCII_CODE_OF_LOWERCASE_A - 1);
        }
        return total + currNumber;
      }, 0);
    }
    return sumOfAllNumbers;
  }
}

module.exports = new StringCalculator();
