import { Day7Data } from "./data";
import { calculateDay7Part1, calculateDay7Part2 } from "./Day7";

describe('Day7', () => {
  const exampleInput = `32T3K 765
  T55J5 684
  KK677 28
  KTJJT 220
  QQQJA 483`;
  describe('Part 1', () => {
    it('returns correct value for sample input', () => {
      expect(calculateDay7Part1(exampleInput)).toEqual(6440);
    });

    it('returns correct value for real input', () => {
        expect(calculateDay7Part1(Day7Data)).toEqual(253638586);
      });
  });
  describe('Part 2', () => {
    it('returns correct value for sample input', () => {
      expect(calculateDay7Part2(exampleInput)).toEqual(5905);
    });

    it('returns correct value for real input', () => {
        expect(calculateDay7Part2(Day7Data)).toEqual(253253225);
      });
  });
});
