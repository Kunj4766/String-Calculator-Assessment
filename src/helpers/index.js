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
  let modifiedString = stringOfNumbers;
  if (stringOfNumbers.startsWith("//")) {
    const indexOfNewLIne = modifiedString.indexOf("\n");
    const delimiter = stringOfNumbers.slice(2, indexOfNewLIne);
    modifiedString = modifiedString
      .slice(indexOfNewLIne)
      .replaceAll(`${delimiter}`, ",");
  }
  const commaSeperatedString = modifiedString.replaceAll("\n", ",");
  const arrayOfNumbers = commaSeperatedString.split(",");
  return arrayOfNumbers;
};

module.exports = {
  customException,
  getAllNegativeNumbersFromText,
  getArrayOfNumbersFromString,
};
