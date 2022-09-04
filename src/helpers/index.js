const {
  REGEX_TO_MATCH_NEGATIVE_NUMBERS,
  DELIMITER_FILTER_TYPES,
} = require("../constants/app-default");

const {
  NO_FILTER,
  FILTER_ODD_NUMBERS,
  FILTER_EVEN_NUMBERS,
  NOT_HAS_DELIMITER_TEXT,
} = DELIMITER_FILTER_TYPES;

const customException = (message) => {
  const error = new Error(message);
  return error;
};

const getAllNegativeNumbersFromText = (text) => {
  const arrayOfNegativeNumbers = text.match(REGEX_TO_MATCH_NEGATIVE_NUMBERS);
  return arrayOfNegativeNumbers.join(",");
};

const getModifiedStringFromDelimiterText = (inputString) => {
  const indexOfNewLIne = inputString.indexOf("\n");
  const indexOfSeparate = inputString.indexOf("//");
  const delimiter = inputString.slice(indexOfSeparate + 2, indexOfNewLIne);
  const modifiedString = inputString
    .slice(indexOfNewLIne)
    .replaceAll(`${delimiter}`, ",");
  return modifiedString;
};

const getDelimiterFilterType = (inputString) => {
  if (inputString.startsWith("//")) {
    return NO_FILTER;
  } else if (inputString.startsWith("0//")) {
    return FILTER_EVEN_NUMBERS;
  } else if (inputString.startsWith("1//")) {
    return FILTER_ODD_NUMBERS;
  } else {
    return NOT_HAS_DELIMITER_TEXT;
  }
};

const getFilteredArrayByFilterType = (filterType, array) => {
  switch (filterType) {
    case FILTER_EVEN_NUMBERS:
      return array.filter((ele) => Number(ele) % 2 === 1);

    case FILTER_ODD_NUMBERS:
      return array.filter((ele) => Number(ele) % 2 === 0);

    default:
      return array;
  }
};

const getArrayOfNumbersFromString = (stringOfNumbers) => {
  let modifiedString = stringOfNumbers;
  const delemeterFilterType = getDelimiterFilterType(stringOfNumbers);
  if (delemeterFilterType) {
    modifiedString = getModifiedStringFromDelimiterText(stringOfNumbers);
  }
  const commaSeperatedString = modifiedString.replaceAll("\n", ",");
  const arrayOfNumbers = commaSeperatedString.split(",");
  const filteredArray = getFilteredArrayByFilterType(
    delemeterFilterType,
    arrayOfNumbers
  );
  return filteredArray;
};

module.exports = {
  customException,
  getAllNegativeNumbersFromText,
  getArrayOfNumbersFromString,
};
