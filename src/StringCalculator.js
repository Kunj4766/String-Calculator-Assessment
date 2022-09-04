const {
  ASCII_CODE_OF_LOWERCASE_A,
  ASCII_CODE_OF_LOWERCASE_Z,
} = require("./constants/app-default");

class StringCalculator {
  constructor() {};

  customException(message) {
    const error = new Error(message);
    return error;
  }

  add(stringOfNumbers) {
    let sumOfAllNumbers = 0;
    try {
      if (!!stringOfNumbers) {
        const arrayOfNumbers = stringOfNumbers.split(",");

        sumOfAllNumbers = arrayOfNumbers.reduce((total, currValue) => {
          let currNumber = Number(currValue);
          const currCharCode = currValue.charCodeAt();

          /* If there any negative number it will give an exeption */
          if (currNumber < 0) {
            throw this.customException(`Negatives not allowed: (${currNumber})`);
          }

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
    } catch (error) {
      throw error;
    }
    return sumOfAllNumbers;
  }
};

module.exports = new StringCalculator();
