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

export const calculateDay4Part2 = (input) => {
  const cardLines = input.split('\n');
  const allCardCounts = cardLines.map((_, i) =>
    calculateTotalCardsWon(cardLines, i)
  );
  console.log({ allCardCounts });

  return allCardCounts.reduce((acc, num) => acc + parseInt(num), 0);
};

const cardWinCounts = new Map();

const calculateTotalCardsWon = (cardLines, i) => {
  const line = cardLines[i];
  const cardId = parseInt(line.split(':')[0].split(' ').slice(-1));
  const cachedCount = cardWinCounts.get(cardId);
  //   console.log({ cachedCount });
  if (cachedCount) return cachedCount;

  const card = line.split(': ')[1].split(' | ');
  const winningNos = card[0]
    .split(' ')
    .filter((n) => n)
    .map((n) => parseInt(n));
  const haveNos = card[1]
    .split(' ')
    .filter((n) => n)
    .map((n) => parseInt(n));

  // calculate how many winning cards there are
  const winsForThisCard = haveNos.filter((num) =>
    winningNos.includes(num)
  ).length;
  // recurse into the others
  const winsForOtherCards = new Array(winsForThisCard)
    .fill(cardId)
    .map((n, i) => n + i)
    .map((id) => calculateTotalCardsWon(cardLines, id));

    const totalWinsForThisCard =
    1 +
    winsForOtherCards.reduce((acc, num) => acc + num, 0);
    cardWinCounts.set(cardId, totalWinsForThisCard);
    console.log({ cardId, winsForThisCard, winsForOtherCards, totalWinsForThisCard });
  return totalWinsForThisCard;
};
