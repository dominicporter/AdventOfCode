import { day3Data } from "./data";
import { calculateDay3 } from "./day3";

describe('Day3', () => {
  it('returns correct value for sample input', () => {
    const input = 
    `467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..`;

    expect(calculateDay3(input)).toEqual(4361);
  });
  it('returns correct value input with nums in right col', () => {
    const input = 
    `
    ..1
    .*.`;

    expect(calculateDay3(input)).toEqual(1);
  });
  it('returns correct value for real input', () => {
  
    expect(calculateDay3(day3Data)).toEqual(554003);
  });
});
