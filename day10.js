export const calculateDay10Part1 = (input) => {
  let startPos = { x: 0, y: 0 };
  const grid = input.split('\n').map((l, y) => {
    const line = l.trim();
    const row = line.split('');
    const sPos = line.indexOf('S');
    if (sPos > -1) {
      startPos = { x: sPos, y };
    }
    return row;
  });

  let count = 0;

  console.log({ grid, startPos });

  let prevPos = { x: 0, y: 0 };
  let pos = { ...startPos };
  while (true) {
    const nextPos = getNextTile(grid, prevPos, pos);
    count++;
    if (grid[nextPos.y][nextPos.x] === 'S') {
      return count / 2;
    }
    prevPos = pos;
    pos = nextPos;
  }
};

const getNextTile = (grid, prevPos, { x, y }) => {
  const tile = grid[y][x];
  if (tile === 'S') {
    if (x < grid[y].length && ['-', '7', 'J'].includes(grid[y][x + 1]))
      return { x: x + 1, y: y };
    if (x > 0 && ['-', 'L', 'F'].includes(grid[y][x - 1]))
      return { x: x - 1, y: y };
    if (y > grid.length && ['|', 'J', 'L'].includes(grid[y - 1][x]))
      return { x: x, y: y + 1 };
    if (y > 0 && ['|', '7', 'F'].includes(grid[y - 1][x]))
      return { x: x, y: y - 1 };
  }

  const LEFT = { x: x - 1, y };
  const DOWN = { x, y: y + 1 };
  const UP = { x, y: y - 1 };
  const RIGHT = { x: x + 1, y };
  if (tile === '7') {
    return prevPos.x !== x - 1 || prevPos.y !== y ? LEFT : DOWN;
  } else if (tile === 'J') {
    return prevPos.x !== x - 1 || prevPos.y !== y ? LEFT : UP;
  } else if (tile === 'L') {
    return prevPos.x !== x + 1 || prevPos.y !== y ? RIGHT : UP;
  } else if (tile === 'F') {
    return prevPos.x !== x + 1 || prevPos.y !== y ? RIGHT : DOWN;
  } else if (tile === '|') {
    return prevPos.x !== x || prevPos.y !== y - 1 ? UP : DOWN;
  } else if (tile === '-') {
    return prevPos.x !== x - 1 || prevPos.y !== y ? LEFT : RIGHT;
  }
};
export const calculateDay10Part2 = (input) => {
  let startPos = { x: 0, y: 0 };
  const grid = input.split('\n').map((l, y) => {
    const line = l.trim();
    const row = line.split('');
    const sPos = line.indexOf('S');
    if (sPos > -1) {
      startPos = { x: sPos, y };
    }
    return row;
  });

  console.log({ grid, startPos });

  // make a copy of the grid
  const gridCopy = grid.map((row) => row.map(() => '.'));
  console.log({ gridCopy });

  let prevPos = { x: 0, y: 0 };
  let pos = { ...startPos };
  while (true) {
    const nextPos = getNextTile(grid, prevPos, pos);
    gridCopy[nextPos.y][nextPos.x] = grid[nextPos.y][nextPos.x];
    if (grid[nextPos.y][nextPos.x] === 'S') {
      break;
    }
    prevPos = pos;
    pos = nextPos;
  }
  let count = 0;
  gridCopy.map((row, y) => {
    let pipes = 0;
    let lastPipe = '';
    row.map((tile) => {
      if (tile === '.' && pipes % 2 === 1) {
        count++;
      } else if ('SF7LJ|'.includes(tile)) {
        if (
          !(lastPipe == 'L' && tile === '7') &&
          !(lastPipe == 'F' && tile === 'J')
        ) {
          pipes++;
        }
        lastPipe = tile;
      }
    });
  });

  return count;
};
