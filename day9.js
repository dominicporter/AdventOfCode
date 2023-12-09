export const calculateDay9Part1 = (input) => {
  return input
    .split('\n')
    .map((line) =>
      line
        .split(' ')
        .filter((x) => x)
        .map((num) => parseInt(num.trim()))
    )
    .map(getNextNumber)
    .reduce((acc, num) => {
      return acc + num;
    }, 0);
};

export const calculateDay9Part2 = (input) => {
  return input
    .split('\n')
    .map((line) =>
      line
        .split(' ')
        .filter((x) => x)
        .map((num) => parseInt(num.trim()))
    )
    .map(getPreviousNumber)
    .reduce((acc, num) => {
      return acc + num;
    }, 0);
};

function getPreviousNumber(sequence) {
  if (sequence.every((n) => n === 0)) return 0;

  const nextSequence = sequence.reduce((acc, num, index) => {
    if (index === sequence.length - 1) return acc;
    return [...acc, sequence[index + 1] - num];
  }, []);
  return sequence[0] - getPreviousNumber(nextSequence);
}

function getNextNumber(sequence) {
  if (sequence.every((n) => n === 0)) return 0;

  const nextSequence = sequence.reduce((acc, num, index) => {
    if (index === sequence.length - 1) return acc;
    return [...acc, sequence[index + 1] - num];
  }, []);
  return getNextNumber(nextSequence) + sequence[sequence.length - 1];
}
