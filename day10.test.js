import { Day10Data } from './data';
import { calculateDay10Part1, calculateDay10Part2 } from './day10';

describe('Day10', () => {
  describe('Part 1', () => {
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
    it('returns correct value for sample input1', () => {
      expect(
        calculateDay10Part2(
         `...........
          .S-------7.
          .|F-----7|.
          .||.....||.
          .||.....||.
          .|L-7.F-J|.
          .|..|.|..|.
          .L--J.L--J.
          ...........`)
      ).toEqual(4);
    });

    it('returns correct value for sample input 2', () => {
      expect(
        calculateDay10Part2(`..........
      .S------7.
      .|F----7|.
      .||....||.
      .||....||.
      .|L-7F-J|.
      .|..||..|.
      .L--JL--J.
      ..........`)
      ).toEqual(4);
    });

    it('returns correct value for sample input 3', () => {
      expect(
        calculateDay10Part2(
          `.F----7F7F7F7F-7....
          .|F--7||||||||FJ....
          .||.FJ||||||||L7....
          FJL7L7LJLJ||LJ.L-7..
          L--J.L7...LJS7F-7L7.
          ....F-J..F7FJ|L7L7L7
          ....L7.F7||L7|.L7L7|
          .....|FJLJ|FJ|F7|.LJ
          ....FJL-7.||.||||...
          ....L---J.LJ.LJLJ...`
        )
      ).toEqual(8);
    });
    it('returns correct value for sample input 4', () => {
      expect(
        calculateDay10Part2(
          `FF7FSF7F7F7F7F7F---7
          L|LJ||||||||||||F--J
          FL-7LJLJ||||||LJL-77
          F--JF--7||LJLJ7F7FJ-
          L---JF-JLJ.||-FJLJJ7
          |F|F-JF---7F7-L7L|7|
          |FFJF7L7F-JF7|JL---7
          7-L-JL7||F7|L7F-7F7|
          L.L7LFJ|||||FJL7||LJ
          L7JLJL-JLJLJL--JLJ.L`
        )
      ).toEqual(10);
    });

    it('returns correct value for real input', () => {
      expect(calculateDay10Part2(Day10Data)).toEqual(601);
    });
  });
});
