export const calculateDay3 = (input) => {
  // split it into arrays
  const rows = input
    .split('')
    .filter((c) => c !== ' ')
    .join('')
    .split('\n');

  // get the numbers and their coords
  const partNumbers = rows.reduce((acc, row, rowIndex) => {
    const numsInRow = findNumbers(row, rowIndex);
    return [...acc, ...numsInRow];
  }, []);

  // for each number calulate if they have a symbol nearby
  const validPartNumbers = partNumbers.filter((p) => hasSymbolNearby(p, rows));

  // add them together and return the result
  console.log(validPartNumbers.length);
  return validPartNumbers.reduce((acc, num) => acc + parseInt(num.num), 0);
};

const hasSymbolNearby = (partNumber, rows) => {
//   console.log({
//     partNumber: partNumber.num,
//     hasLeft: hasLeft(partNumber, rows),
//     hasRight: hasRight(partNumber, rows),
//     hasAbove: hasAbove(partNumber, rows),
//     hasBelow: hasBelow(partNumber, rows),
//   });
  return (
    hasLeft(partNumber, rows) ||
    hasRight(partNumber, rows) ||
    hasAbove(partNumber, rows) ||
    hasBelow(partNumber, rows)
  );
};

const findNumbers = (row, rowIndex) => {
  const numsInRow = row.split('').reduce(
    ({ partial, nums }, char, columnIndex) => {
      if (!isNaN(parseInt(char))) {
        // we have a digit
        if (partial) {
          // one already started so add to it
          return { partial: { ...partial, num: partial.num + char }, nums };
        }
        // no partial so start one
        return { partial: { x: columnIndex, y: rowIndex, num: char }, nums };
      }

      return { partial: null, nums: partial ? [...nums, partial] : nums };
    },
    { partial: null, nums: [] }
  );
  return [...numsInRow.nums, numsInRow.partial].filter((n) => n);
};

function hasBelow(partNumber, rows) {
  const row = rows[partNumber.y + 1];
  const retval =
    partNumber.y < rows.length - 1 &&
    row
      .slice(
        Math.max(partNumber.x - 1, 0),
        Math.min(partNumber.x + partNumber.num.length + 1, row.length)
      )
      .split('')
      .some((c) => c !== '.');
  return retval;
}
function hasAbove(partNumber, rows) {
  const row = rows[partNumber.y - 1];
  const retval =
    partNumber.y > 0 &&
    row
      .slice(
        Math.max(partNumber.x - 1, 0),
        Math.min(partNumber.x + partNumber.num.length + 1, row.length)
      )
      .split('')
      .some((c) => c !== '.');
  return retval;
}

function hasRight(partNumber, rows) {
  const row = rows[partNumber.y];
  return (
    partNumber.x + partNumber.num.length < row.length &&
    row[partNumber.x + partNumber.num.length] !== '.'
  );
}

function hasLeft(partNumber, rows) {
  return partNumber.x > 0 && rows[partNumber.y][partNumber.x - 1] !== '.';
}
