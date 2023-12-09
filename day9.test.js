import { Day9Data } from './data';
import { calculateDay9Part1, calculateDay9Part2 } from './day9';

describe('Day9', () => {
  const exampleInput1 = `0 3 6 9 12 15
  1 3 6 10 15 21
  10 13 16 21 30 45`;
  describe('Part 1', () => {
    it('returns correct value for sample input 1', () => {
      expect(calculateDay9Part1(exampleInput1)).toEqual(114);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay9Part1(Day9Data)).toEqual(2043183816);
    });
  });
  describe('Part 2', () => {
    it('returns correct value for sample input', () => {
      expect(calculateDay9Part2(exampleInput1)).toEqual(2);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay9Part2(Day9Data)).toEqual(1118);
    });
  });
});
