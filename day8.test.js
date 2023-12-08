import { Day8Data } from './data';
import { calculateDay8Part1, calculateDay8Part2 } from './Day8';

describe('Day8', () => {
  describe('Part 1', () => {
    const exampleInput1 = `RL
  
    AAA = (BBB, CCC)
    BBB = (DDD, EEE)
    CCC = (ZZZ, GGG)
    DDD = (DDD, DDD)
    EEE = (EEE, EEE)
    GGG = (GGG, GGG)
    ZZZ = (ZZZ, ZZZ)`;
    const exampleInput2 = `LLR
  
    AAA = (BBB, BBB)
    BBB = (AAA, ZZZ)
    ZZZ = (ZZZ, ZZZ)`;
    it('returns correct value for sample input 1', () => {
      expect(calculateDay8Part1(exampleInput1)).toEqual(2);
    });

    it('returns correct value for sample input 2', () => {
      expect(calculateDay8Part1(exampleInput2)).toEqual(6);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay8Part1(Day8Data)).toEqual(12643);
    });
  });
  describe('Part 2', () => {
    const exampleInput = `LR

    11A = (11B, XXX)
    11B = (XXX, 11Z)
    11Z = (11B, XXX)
    22A = (22B, XXX)
    22B = (22C, 22C)
    22C = (22Z, 22Z)
    22Z = (22B, 22B)
    XXX = (XXX, XXX)`
    it('returns correct value for sample input', () => {
      expect(calculateDay8Part2(exampleInput)).toEqual(6);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay8Part2(Day8Data)).toEqual(13133452426987);
    });
  });
});
