export const calculateDay4Part1 = (input) => {
  const allCardScores = input
    .split('\n')
    .map((line) => calculatePart1ScoreForCard(line));

  return allCardScores.reduce((acc, num) => acc + parseInt(num), 0);
};

const calculatePart1ScoreForCard = (line) => {
  const card = line.split(': ')[1].split(' | ');
  const winningNos = getWinningNumbers(card);
  const haveNos = getHaveNumbers(card);

  const score = haveNos.reduce((score, num) => {
    if (winningNos.includes(num)) {
      return score ? score * 2 : 1;
    }
    return score;
  }, 0);

  //   console.log({ winningNos, haveNos, score });
  return score;
};
const calculatePart2MatchesForCard = (line) => {
  const card = line.split(': ')[1].split(' | ');
  const winningNos = getWinningNumbers(card);
  const haveNos = getHaveNumbers(card);

  const score = haveNos.filter((num) => winningNos.includes(num)).length;

  //   console.log({ winningNos, haveNos, score });
  return score;
};

const cache = new Map();

export const calculateDay4Part2 = (input) => {
  cache.clear();
  const cardLines = input.split('\n');
  const cardMatches = cardLines.map((line) =>
    calculatePart2MatchesForCard(line)
  );
  console.log({ cardMatches });

  const cardScores = cardMatches.map((_, i) =>
    addCardsWonForThisCard(cardMatches, i)
  );
  // console.log({cardWinCounts});
  console.log({ cardScores });

  return Array.from(cardScores.values()).reduce(
    (acc, num) => acc + parseInt(num),
    0
  );
};

const addCardsWonForThisCard = (cardMatches, cardId) => {
  if (cache.has(cardId)) return cache.get(cardId);

  const newCardsToAdd = new Array(cardMatches[cardId])
    .fill(cardId)
    .map((n, i) => n + i + 1);

  //   console.log({cardId,newCardsToAdd})
  const newCardsFromOtherNewCards = newCardsToAdd.reduce((acc, nextId) => {
    return acc + addCardsWonForThisCard(cardMatches, nextId);
  }, 0);
  //   console.log({
  //     cardId: cardId + 1,
  //     matches: cardMatches[cardId],
  //     newCardsFromOtherNewCards,
  //   });
  const scoreForCard = 1 + newCardsFromOtherNewCards;
  cache.set(cardId, scoreForCard);
  return scoreForCard;
};

function getHaveNumbers(card) {
  return card[1]
    .split(' ')
    .filter((n) => n)
    .map((n) => parseInt(n));
}

function getWinningNumbers(card) {
  return card[0]
    .split(' ')
    .filter((n) => n)
    .map((n) => parseInt(n));
}
