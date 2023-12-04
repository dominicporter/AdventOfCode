export const calculateDay4Part1 = (input) => {
  const allCardScores = input
    .split('\n')
    .map((line) => calculateScoreForCard(line));

  return allCardScores.reduce((acc, num) => acc + parseInt(num), 0);
};

const calculateScoreForCard = (line) => {
  const card = line.split(': ')[1].split(' | ');
  const winningNos = card[0]
    .split(' ')
    .filter((n) => n)
    .map((n) => parseInt(n));
  const haveNos = card[1]
    .split(' ')
    .filter((n) => n)
    .map((n) => parseInt(n));

  const score = haveNos.reduce((score, num) => {
    if (winningNos.includes(num)) {
      return score ? score * 2 : 1;
    }
    return score;
  }, 0);

  console.log({ winningNos, haveNos, score });
  return score;
};
