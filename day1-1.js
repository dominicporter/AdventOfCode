import { day1Data } from './data.js';

// console.log(data); // Display the text content
const calculateFirstAndLastDigits = (data) =>
  data
    .split('\n')
    .filter((d) => d)
    .map((line) => {
      // console.log(line)
      const firstAndLast = line.split('').reduce(
        (acc, curr) => {
          if (!isNaN(Number(curr))) {
            // curr is a digit
            if (acc.first) {
              // acc.first is already set
              // console.log(acc.first, curr);
              return { first: acc.first, last: curr };
            }
            return { first: curr, last: curr };
          }
          // curr is not a digit
          return acc;
        },
        { first: undefined, last: undefined }
      );
      return (
        (firstAndLast.first ?? '').toString() +
        (firstAndLast.last ?? '').toString()
      );
    });

const numbersPart1 = calculateFirstAndLastDigits(day1Data);

console.log(
  'ANSWER 1: ' +
    numbersPart1.reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0)
);
