const { REGEX_TO_MATCH_NEGATIVE_NUMBERS } = require("../constants/app-default");

const customException = (message) => {
  const error = new Error(message);
  return error;
};

const getAllNegativeNumbersFromText = (text) => {
  const arrayOfNegativeNumbers = text.match(REGEX_TO_MATCH_NEGATIVE_NUMBERS);
  return arrayOfNegativeNumbers.join(",");
};

module.exports = {
  customException,
  getAllNegativeNumbersFromText,
};
