import { Day10Data } from './data';
import { calculateDay10Part1, calculateDay10Part2 } from './day10';

describe('Day10', () => {
  const exampleInput1 = `-L|F7
  7S-7|
  L|7||
  -L-J|
  L|-JF`;
  const exampleInput2 = `7-F7-
  .FJ|7
  SJLL7
  |F--J
  LJ.LJ`;
  describe('Part 1', () => {
    it('returns correct value for sample input 1', () => {
      expect(calculateDay10Part1(exampleInput1)).toEqual(4);
    });
    it('returns correct value for sample input 2', () => {
      expect(calculateDay10Part1(exampleInput2)).toEqual(8);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay10Part1(Day10Data)).toEqual(6649);
    });
  });
  describe('Part 2', () => {
    it('returns correct value for sample input', () => {
      expect(calculateDay10Part2(exampleInput1)).toEqual(0);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay10Part2(Day10Data)).toEqual(0);
    });
  });
});
