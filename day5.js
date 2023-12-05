export const calculateDay5Part1 = (input) => {
  // Parse the input
  const lines = input.split('\n');
  const seeds = getNumbers(lines[0].split(': ')[1]);
  console.log(seeds);

  const maps = lines.slice(2).reduce((acc, line) => {
    if (line.includes('map')) {
      return [...acc, []];
    }
    const nums = getNumbers(line);
    // console.log(nums)
    if (nums.length) {
      const currentMap = acc[acc.length - 1];
      const others = acc.slice(0, acc.length - 1);

      console.log(currentMap);
      return [
        ...others,
        [...currentMap, { dest: nums[0], src: nums[1], len: nums[2] }],
      ];
    }
    return acc;
  }, []);

//   console.log(JSON.stringify(maps, null, 2));
  // sort by source
  maps.map((map) => map.sort((a, b) => a.src - b.src));
//   console.log(JSON.stringify(maps, null, 2));

  // pass through all the maps
  const mappedSeeds = seeds.map((seed) => processSeed(seed, maps));
  console.log({mappedSeeds});
  //work out lowest
  return Math.min(...mappedSeeds);
};

const processSeed = (seed, maps) => {
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
            return seed
        }
        if (seed >=range.src && seed < range.src + range.len) {
            return range.dest + (seed - range.src)
        }
    }

    // no ranges matched so return seed
    return seed
}
const getNumbers = (line) =>
  line
    .split(' ')
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));
