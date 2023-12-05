import { day5Data } from "./data";
import { calculateDay5Part1, calculateDay5Part2 } from "./day5";

describe('Day5', () => {
  describe('Part 1', () => {
    it('returns correct value for sample input', () => {
      const input = `seeds: 79 14 55 13

        seed-to-soil map:
        50 98 2
        52 50 48
        
        soil-to-fertilizer map:
        0 15 37
        37 52 2
        39 0 15
        
        fertilizer-to-water map:
        49 53 8
        0 11 42
        42 0 7
        57 7 4
        
        water-to-light map:
        88 18 7
        18 25 70
        
        light-to-temperature map:
        45 77 23
        81 45 19
        68 64 13
        
        temperature-to-humidity map:
        0 69 1
        1 0 69
        
        humidity-to-location map:
        60 56 37
        56 93 4`;

      expect(calculateDay5Part1(input)).toEqual(35);
    });

    it('returns correct value for real input', () => {
        expect(calculateDay5Part1(day5Data)).toEqual(3374647);
      });
  });
  describe('Part 2', () => {
    it('returns correct value for sample input', () => {
      const input = `seeds: 79 14 55 13

        seed-to-soil map:
        50 98 2
        52 50 48
        
        soil-to-fertilizer map:
        0 15 37
        37 52 2
        39 0 15
        
        fertilizer-to-water map:
        49 53 8
        0 11 42
        42 0 7
        57 7 4
        
        water-to-light map:
        88 18 7
        18 25 70
        
        light-to-temperature map:
        45 77 23
        81 45 19
        68 64 13
        
        temperature-to-humidity map:
        0 69 1
        1 0 69
        
        humidity-to-location map:
        60 56 37
        56 93 4`;

      expect(calculateDay5Part2(input)).toEqual(46);
    });

    // This takes a long time to run
    it.skip('returns correct value for real input', () => {
        expect(calculateDay5Part2(day5Data)).toEqual(6082852);
      });
  });
});
