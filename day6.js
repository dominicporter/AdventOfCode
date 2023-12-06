export const calculateDay6Part1 = (input) => {
  const { times, distances } = buildInputData(input);

  // Calculate number of ways to win each race
  const numsOfWaysToWin = times.map((time, index) => {
    return calcNumOfWaysToWin(time, distances[index]);
  });
  console.log({ numsOfWaysToWin });
  // multiply them and return result
  return numsOfWaysToWin.reduce((acc, num) => acc * num, 1);
};

const calcNumOfWaysToWin = (time, distance) => {
  // spin through alltimes between 1 and time holding in button
  // calculate distance travelled in remaining time
  let waysToWin = 0;
  for (let i = 1; i < time; i++) {
    const distanceTravelled = i * (time - i);
    if (distanceTravelled > distance) {
    //   console.log(`Adding ${i}`);
      waysToWin++;
    }

  }
  console.log({ time, distance, waysToWin });

  // multiply the results together
  return waysToWin;
};
export const calculateDay6Part2 = (input) => {
  const { time, distance } = buildInputData2(input);

  // Calculate number of ways to win each race
  const numsOfWaysToWin = calcNumOfWaysToWin(time, distance);
  
  console.log({ numsOfWaysToWin });
  // multiply them and return result
  return numsOfWaysToWin;
};

function buildInputData(input) {
  const lines = input.split('\n');
  const times = lines[0]
    .split(':')[1]
    .trim()
    .split(' ')
    .map((time) => parseInt(time, 10))
    .filter((x) => x);

  const distances = lines[1]
    .split(':')[1]
    .trim()
    .split(' ')
    .map((time) => parseInt(time, 10))
    .filter((x) => x);

  return { times, distances };
}
function buildInputData2(input) {
  const lines = input.split('\n');
  const time = parseInt(lines[0].split(':')[1].trim().split(' ').join(''));

  const distance = parseInt(lines[1].split(':')[1].trim().split(' ').join(''));
  console.log({ times: time, distances: distance });
  return {  time,  distance };
}
