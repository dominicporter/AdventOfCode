import { day3Data } from './data';
import { calculateDay3Part1, calculateDay3Part2 } from './day3';

describe('Day3', () => {
  describe('Part 1', () => {
    it('returns correct value for sample input', () => {
      const input = `467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..`;

      expect(calculateDay3Part1(input)).toEqual(4361);
    });
    it('returns correct value input with nums in right col', () => {
      const input = `
    ..1
    .*.`;

      expect(calculateDay3Part1(input)).toEqual(1);
    });
    it('returns correct value for real input', () => {
      expect(calculateDay3Part1(day3Data)).toEqual(554003);
    });
  });

  describe('Part 2', () => {
    it('returns correct value for sample input', () => {
      const input = `467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..`;

      expect(calculateDay3Part2(input)).toEqual(467835);
    });
    it('edge case', () => {
      const input = `
      ...........
      ...428*522.
      ...........`;

      expect(calculateDay3Part2(input)).toEqual(223416);
    });
    it('returns correct value for real input', () => {
      expect(calculateDay3Part2(day3Data)).toEqual(87263515);
    });
  });
});
