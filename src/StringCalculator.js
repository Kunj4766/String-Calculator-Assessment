const {
  ASCII_CODE_OF_LOWERCASE_A,
  ASCII_CODE_OF_LOWERCASE_Z,
  NEGATIVE_NUMBER_EXCEPTION_MSG,
} = require("./constants/app-default");

const {
  customException,
  getAllNegativeNumbersFromText,
  getArrayOfNumbersFromString,
} = require("./helpers");

class StringCalculator {
  constructor() {}

  add(stringOfNumbers) {
    let sumOfAllNumbers = 0;
    try {
      if (!!stringOfNumbers) {
        const arrayOfNumbers = getArrayOfNumbersFromString(stringOfNumbers);

        sumOfAllNumbers = arrayOfNumbers.reduce((total, currValue) => {
          let currNumber = Number(currValue);
          const currCharCode = currValue.charCodeAt();

          /* If there any negative number it will give an exeption */
          if (currNumber < 0) {
            const negativeNumbers =
              getAllNegativeNumbersFromText(stringOfNumbers);
            throw customException(
              `${NEGATIVE_NUMBER_EXCEPTION_MSG} (${negativeNumbers})`
            );
          }

          /* check if currValue is lowerCase alphabet or number */
          if (
            currCharCode >= ASCII_CODE_OF_LOWERCASE_A &&
            currCharCode <= ASCII_CODE_OF_LOWERCASE_Z
          ) {
            currNumber = currCharCode - (ASCII_CODE_OF_LOWERCASE_A - 1);
          }

          /* If the currValue is greter than 1000 it will be ignored */
          if (currNumber > 1000) {
            currNumber = 0;
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
