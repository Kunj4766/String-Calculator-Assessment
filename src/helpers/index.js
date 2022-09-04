const {
  REGEX_TO_MATCH_NEGATIVE_NUMBERS,
  DELIMITER_FILTER_TYPES,
  INPUT_STRING_IDENTIFICATION_SYMBOLS,
} = require("../constants/app-default");

const {
  NO_FILTER,
  FILTER_ODD_NUMBERS,
  FILTER_EVEN_NUMBERS,
  NOT_HAS_DELIMITER_TEXT,
} = DELIMITER_FILTER_TYPES;

const {
  SEPERATOR_SYMBOL,
  EVEN_IDENTIFICATION_SYMBOL,
  ODD_IDENTIFICATION_SYMBOL,
} = INPUT_STRING_IDENTIFICATION_SYMBOLS;

/**
 *
 * @param {*} message
 * @returns method is used to return custom Exception
 */
const customException = (message) => {
  const error = new Error(message);
  return error;
};

/**
 *
 * @param {*} text
 * @returns method will return All Negative Numbers From the comma seperated string
 */
const getAllNegativeNumbersFromText = (text) => {
  const arrayOfNegativeNumbers = text.match(REGEX_TO_MATCH_NEGATIVE_NUMBERS);
  return arrayOfNegativeNumbers.join(",");
};

/**
 *
 * @param {*} inputString
 * @returns: method returns comma seperated numbers of string type
 */
const getModifiedStringFromDelimiterText = (inputString) => {
  const indexOfNewLIne = inputString.indexOf("\n");
  const indexOfSeparate = inputString.indexOf(SEPERATOR_SYMBOL);
  const delimiter = inputString.slice(indexOfSeparate + 2, indexOfNewLIne);
  const modifiedString = inputString
    .slice(indexOfNewLIne)
    .replaceAll(`${delimiter}`, ",");
  return modifiedString;
};

/**
 *
 * @param {*} inputString
 * @returns: method returns filterType from which we'll filter numbers array
 */
const getDelimiterFilterType = (inputString) => {
  if (inputString.startsWith(SEPERATOR_SYMBOL)) {
    return NO_FILTER;
  } else if (inputString.startsWith(ODD_IDENTIFICATION_SYMBOL)) {
    return FILTER_EVEN_NUMBERS;
  } else if (inputString.startsWith(EVEN_IDENTIFICATION_SYMBOL)) {
    return FILTER_ODD_NUMBERS;
  } else {
    return NOT_HAS_DELIMITER_TEXT;
  }
};

/**
 *
 * @param {*} filterType
 * @param {*} array
 * @returns: method returns filtered arrray as per the filtertype
 */
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

/**
 *
 * @param {*} stringOfNumbers
 * @returns: method returns array of numbers based on string input
 */
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
