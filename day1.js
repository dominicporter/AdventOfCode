import { day1Data } from './data.js';
// const day1Data = `two1nine
// eightwo83three
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`;

const textNumTable = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

const getFirstNumber = (line, includeTextNumbers, partline = '') => {
  // console.log('partline: ' + partline + ' line: ' + line);
  if (partline.length > 0) {
    const lastChar = partline.slice(-1);
    if (!isNaN(Number(lastChar))) {
      return lastChar;
    }
    if (includeTextNumbers) {
      const containedTextNum = Object.keys(textNumTable).find((textNum) =>
        partline.includes(textNum)
      );
      if (containedTextNum) {
        // console.log('text');
        return textNumTable[containedTextNum];
      }
    }
  }
  return getFirstNumber(
    line,
    includeTextNumbers,
    line.slice(0, partline.length + 1)
  );
};

const getLastNumber = (line, includeTextNumbers, partline = '') => {
  // console.log('partline: ' + partline + ' line: ' + line);
  if (partline.length > 0) {
    const firstChar = partline.slice(0, 1);
    if (!isNaN(Number(firstChar))) {
      // console.log('num'+!isNaN(Number(firstChar))+' >'+firstChar+'<')
      return firstChar;
    }
    if (includeTextNumbers) {
      const containedTextNum = Object.keys(textNumTable).find((textNum) =>
        partline.includes(textNum)
      );
      if (containedTextNum) {
        // console.log('text');
        return textNumTable[containedTextNum];
      }
    }
  }
  // console.log('recurse')

  return getLastNumber(
    line,
    includeTextNumbers,
    line.slice(-1 * (partline.length + 1))
  );
};
const calculateFirstAndLastDigits = (data, includeTextNumbers = false) =>
  data
    .split('\n')
    .filter((d) => d)
    .map((line) => {
      // console.log(line)
      return `${getFirstNumber(line, includeTextNumbers)}${getLastNumber(
        line,
        includeTextNumbers
      )}`;
    });

const numbersPart1 = calculateFirstAndLastDigits(day1Data);
console.log(
  'ANSWER 1 (should be 55488): ' +
    numbersPart1.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0)
);

const numbersPart2 = calculateFirstAndLastDigits(day1Data, true);
console.log(
  'ANSWER 2 (should be 55614): ' +
    numbersPart2.reduce((acc, curr, i) => {
      // console.log(`${i} ${day1Data.split('\n')[i]}  ${curr}`);
      return acc + parseInt(curr);
    }, 0)
);
