import { day2Data } from './data.js';

// Should give 8 for part 1
// const day2Data = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`

// Parse the data from string into an array of objects
const parsedData = day2Data.split('\n').map((line) => {
  const [gameName, games] = line.split(': ');
  const drawObjects = games.split('; ').map((draw) => {
    const cubes = draw.split(', ');
    const x = cubes.map((c) => {
      return { [c.split(' ')[1]]: parseInt(c.split(' ')[0]) };
    });

    // covert [ { blue: '4' }, { red: '2' }, { green: '1' } ] to { blue: '4', red: '2', green: '1' }
    return x.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});
  });
//   console.log(JSON.stringify(drawObjects, null, 2));
  return { id: gameName.split('Game ')[1], drawObjects };
});

// Filter out all the ones that have more than 12 red, 13 green, and 14 blue
console.log(JSON.stringify(parsedData, null, 2))
const filteredData = parsedData.filter((d) => {
  return d.drawObjects.every(({red,blue,green}) => {
    return (
      (!red ||red <= 12) &&
      (!green || green <= 13) &&
      (!blue || blue <= 14) 
    );
  });
});
console.log(JSON.stringify(filteredData, null, 2));

// Sum the Ids of the remaining ones
console.log(
    'ANSWER 1 (should be 2439): ' +
    filteredData.reduce((acc, curr, i) => {
        return acc + parseInt(curr.id);
      }, 0)
  );