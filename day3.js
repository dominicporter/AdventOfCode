export const calculateDay3Part1 = (input) => {
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
  return validPartNumbers.reduce((acc, num) => acc + parseInt(num.num), 0);
};
export const calculateDay3Part2 = (input) => {
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

  // find all the stars
  const stars = rows.reduce((acc, row, rowIndex) => {
    const starsInRow = findStars(row, rowIndex);
    return [...acc, ...starsInRow];
  }, []);
  console.log('all',stars);

  // for each number calulate if they have a symbol nearby
  const starMap = stars.map((star) => {
    const adjacentParts = partNumbers.filter((p) => isAdjacent(p, star));
    console.log(adjacentParts)
    return adjacentParts.length === 2? adjacentParts[0].num * adjacentParts[1].num : 0;
  });

  console.log(starMap);

  // add them together and return the result
  return starMap.reduce((acc, num) => acc + parseInt(num), 0);
};

const isAdjacent = (pn, star) => {
    // console.log({pn, star})
  return (
    (pn.y === star.y - 1 &&
      star.x >= pn.x - 1 &&
      star.x <= pn.x + pn.num.length) ||
    (pn.y === star.y + 1 &&
      star.x >= pn.x - 1 &&
      star.x <= pn.x + pn.num.length) ||
    (pn.y === star.y &&
      (pn.x === star.x + 1 || pn.x + pn.num.length === star.x))
  );
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
const findStars = (row, rowIndex) => {
  const starsInRow = row.split('').reduce((acc, char, columnIndex) => {
    return char === '*' ? [...acc, { x: columnIndex, y: rowIndex }] : acc;
  }, []);
  return starsInRow;
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
