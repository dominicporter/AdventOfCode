export const calculateDay5Part1 = (input) => {
  // Parse the input
  const lines = input.split('\n');
  const seeds = getNumbers(lines[0].split(': ')[1]);
  const maps = buildMapsStructure(lines);

  maps.map((map) => map.sort((a, b) => a.src - b.src));

  // pass through all the maps
  const mappedSeeds = seeds.map((seed) => processSeed(seed, maps));

  //work out lowest
  return Math.min(...mappedSeeds);
};
export const calculateDay5Part2 = (input) => {
  // Parse the input
  const lines = input.split('\n');
  const seeds = getNumbers(lines[0].split(': ')[1]);
  console.log(seeds);

  const seedPairs = seeds.reduce((acc, seed, i) => {
    if (i % 2 === 0) {
      return [...acc, { start: seed, length: seeds[i + 1] }];
    }
    return acc;
  }, []);

//   console.log(seedPairs);
  const maps = buildMapsStructure(lines);

  // pass through all the maps
  return seedPairs.reduce((acc, { start, length }) => {
    return Math.min(acc, processSeedsInRange(start, length, maps));
  }, Infinity);

};

const processSeedsInRange = (start, length, maps) => {
    console.log({start, length});
  let lowest = Infinity;
  for (let i = start; i < start + length; i++) {
    const mappedSeed = processSeed(i, maps);
    if (mappedSeed < lowest) {
      lowest = mappedSeed;
    }
  }
  return lowest;
};
const processSeed = (seed, maps) => {
    // console.log({seed});
  return maps.reduce((acc, map) => {
    const mappedSeed = mapSeed(acc, map);
    //   console.log({mappedSeed});
    return mappedSeed;
  }, seed);
};

const mapSeed = (seed, map) => {
  // console.log({seed, map});
  for (const range of map) {
    // console.log({range})
    if (seed < range.src) {
      return seed;
    }
    if (seed >= range.src && seed < range.src + range.len) {
      return range.dest + (seed - range.src);
    }
  }

  // no ranges matched so return seed
  return seed;
};
const getNumbers = (line) =>
  line
    .split(' ')
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));

function buildMapsStructure(lines) {
  const maps = lines.slice(2).reduce((acc, line) => {
    if (line.includes('map')) {
      return [...acc, []];
    }
    const nums = getNumbers(line);

    if (nums.length) {
      const currentMap = acc[acc.length - 1];
      const others = acc.slice(0, acc.length - 1);

      return [
        ...others,
        [...currentMap, { dest: nums[0], src: nums[1], len: nums[2] }],
      ];
    }
    return acc;
  }, []);

  // sort by source
  maps.map((map) => map.sort((a, b) => a.src - b.src));
  return maps;
}
