import { day4Data } from './data';
import { calculateDay4Part1,calculateDay4Part2 } from './day4';

describe('Day4', () => {
  describe('Part 1', () => {
    it('returns correct value for sample input', () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
      Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
      Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
      Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
      Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
      Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

      expect(calculateDay4Part1(input)).toEqual(13);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay4Part1(day4Data)).toEqual(20117);
    });
  });
  describe('Part 2', () => {
    it.only('returns correct value for sample input', () => {
      const input = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
      Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
      Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
      Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
      Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
      Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

      expect(calculateDay4Part2(input)).toEqual(30);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay4Part2(day4Data)).toEqual(20117);
    });
  });
});
