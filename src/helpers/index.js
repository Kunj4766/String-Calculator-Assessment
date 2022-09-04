const { REGEX_TO_MATCH_NEGATIVE_NUMBERS } = require("../constants/app-default");

const customException = (message) => {
  const error = new Error(message);
  return error;
};

const getAllNegativeNumbersFromText = (text) => {
  const arrayOfNegativeNumbers = text.match(REGEX_TO_MATCH_NEGATIVE_NUMBERS);
  return arrayOfNegativeNumbers.join(",");
};

const getArrayOfNumbersFromString = (stringOfNumbers) => {
  const commaSeperatedString = stringOfNumbers.replaceAll("\n", ",");
  const arrayOfNumbers = commaSeperatedString.split(",");
  return arrayOfNumbers;
};

module.exports = {
  customException,
  getAllNegativeNumbersFromText,
  getArrayOfNumbersFromString,
};
