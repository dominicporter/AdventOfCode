import { Day6Data } from "./data";
import { calculateDay6Part1, calculateDay6Part2 } from "./Day6";

describe('Day6', () => {
  const exampleInput = `Time:      7  15   30
  Distance:  9  40  200`;
  describe('Part 1', () => {
    it('returns correct value for sample input', () => {
      expect(calculateDay6Part1(exampleInput)).toEqual(288);
    });

    it('returns correct value for real input', () => {
        expect(calculateDay6Part1(Day6Data)).toEqual(275724);
      });
  });
  describe('Part 2', () => {
    it('returns correct value for sample input', () => {
      expect(calculateDay6Part2(exampleInput)).toEqual(71503);
    });

    // This takes a long time to run
    it('returns correct value for real input', () => {
        expect(calculateDay6Part2(Day6Data)).toEqual(37286485);
      });
  });
});
