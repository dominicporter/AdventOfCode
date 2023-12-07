export const calculateDay7Part1 = (input) => {
  // parse the input
  const lines = input.split('\n');
  const hands = lines.map((line) => {
    const l = line.trim().split(' ');
    return {
      cards: l[0]
        .replace(/A/g, 'E')
        .replace(/K/g, 'D')
        .replace(/Q/g, 'C')
        .replace(/J/g, 'B')
        .replace(/T/g, 'A'),
      bid: parseInt(l[1], 10),
    };
  });

  // sort into winning order
  const typedHands = hands.map((hand) => addTypes(hand));
  typedHands.sort((a, b) => {
    if (a.type === b.type) return b.cards > a.cards ? -1 : 1;
    return a.type > b.type ? 1 : -1;
  });

  // score by position, mulitply bid by score and sum together
  return typedHands.reduce((acc, hand, i) => {
    const score = hand.bid * (i + 1);
    return acc + score;
  }, 0);
};

const addTypes = (hand) => {
  const cardCounts = hand.cards.split('').reduce((acc, card) => {
    if (acc[card]) return { ...acc, [card]: acc[card] + 1 };
    return { ...acc, [card]: 1 };
  }, {});
  const { 0: jacks, ...rest } = cardCounts;
  const cardCountsWithoutJacks = jacks
    ? getUpdatedWithoutJacks(jacks, rest)
    : cardCounts;

  if (Object.keys(cardCountsWithoutJacks).length === 1)
    return { ...hand, type: handTypes.FiveOfAKind };
  if (Object.values(cardCountsWithoutJacks).includes(4))
    return { ...hand, type: handTypes.FourOfAKind };
  if (
    Object.values(cardCountsWithoutJacks).includes(3) &&
    Object.values(cardCountsWithoutJacks).includes(2)
  )
    return { ...hand, type: handTypes.FullHouse };
  if (Object.values(cardCountsWithoutJacks).includes(3))
    return { ...hand, type: handTypes.ThreeOfAKind };
  if (Object.values(cardCountsWithoutJacks).filter((x) => x === 2).length === 2)
    return { ...hand, type: handTypes.TwoPair };
  if (Object.values(cardCountsWithoutJacks).includes(2))
    return { ...hand, type: handTypes.OnePair };
  return { ...hand, type: handTypes.HighCard };
};
const getUpdatedWithoutJacks = (jacks, rest) => {
  console.log({ jacks, rest });
  const keyWithHighestValue = Object.keys(rest).length
    ? Object.keys(rest).reduce((acc, curr) =>
        rest[acc] > rest[curr] ? acc : curr
      )
    : '0';
  return { ...rest, [keyWithHighestValue]: rest[keyWithHighestValue] + jacks };
};

const handTypes = {
  HighCard: 1,
  OnePair: 2,
  TwoPair: 3,
  ThreeOfAKind: 4,
  FullHouse: 5,
  FourOfAKind: 6,
  FiveOfAKind: 7,
};
export const calculateDay7Part2 = (input) => {
  // parse the input
  const lines = input.split('\n');
  const hands = lines.map((line) => {
    const l = line.trim().split(' ');
    return {
      cards: l[0]
        .replace(/A/g, 'E')
        .replace(/K/g, 'D')
        .replace(/Q/g, 'C')
        .replace(/J/g, '0')
        .replace(/T/g, 'A'),
      bid: parseInt(l[1], 10),
    };
  });

  // sort into winning order
  const typedHands = hands.map((hand) => addTypes(hand));
  typedHands.sort((a, b) => {
    if (a.type === b.type) return b.cards > a.cards ? -1 : 1;
    return a.type > b.type ? 1 : -1;
  });
  console.log(typedHands);
  // score by position, mulitply bid by score and sum together
  return typedHands.reduce((acc, hand, i) => {
    const score = hand.bid * (i + 1);
    return acc + score;
  }, 0);
};
