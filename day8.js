import fs from 'fs';
export const calculateDay8Part1 = (input) => {
  const lines = input.split('\n');

  const instructions = lines[0].trim();
  console.log(instructions);

  const network = buildNetwork(lines);
  console.log({ network });

  // walk through each instruction until we find ZZZ
  let currentNode = 'AAA';
  let iterations = 0;
  while (currentNode !== 'ZZZ') {
    currentNode = traverseNetwork(currentNode, network, instructions);
    iterations++;
  }

  // return step count
  return iterations * instructions.length;
};

const traverseNetwork = (startNode, network, instructions) => {
  return instructions.split('').reduce((acc, instruction) => {
    const { left, right } = network[acc];
    if (instruction === 'L') {
      // console.log({left})
      return left;
    }
    // console.log({right})
    return right;
  }, startNode);
};

export const calculateDay8Part2 = (input) => {
  const lines = input.split('\n');

  const instructions = lines[0].trim();
  console.log(instructions);

  const network = buildNetwork(lines);
  //   console.log({ network });

  // walk through instructions from all nodes ending in A to all routes ending in Z
  let currentNodes = Object.keys(network).filter((node) => node.endsWith('A'));
  console.log({ startingNodes: currentNodes });
  const stepCounts = currentNodes.map((node) => {
    let steps = 0;
    let nextIndex = 0;
    while (!node.endsWith('Z')) {
      node = traverseOneStep(node, network, instructions[nextIndex]);
      steps++;
      nextIndex++;
      if (nextIndex === instructions.length) nextIndex = 0;
    }
    return steps;
  });
  console.log({ stepCounts });
  return leastCommonMultiple(stepCounts);
};

function leastCommonMultiple(nums) {
  function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  var multiple = nums.sort()[0];
  nums.forEach(function (n) {
    multiple = lcm(multiple, n);
  });

  return multiple;
}

const traverseOneStep = (node, network, instruction) => {
  const { left, right } = network[node];
  if (instruction === 'L') {
    return left;
  }
  return right;
};
function buildNetwork(lines) {
  return lines.slice(2).reduce((acc, line) => {
    const simpleLine = line.replace(/[=\(,\)]/g, '').trim();
    const parts = simpleLine.split(' ').filter((x) => x);
    return { ...acc, [parts[0]]: { left: parts[1], right: parts[2] } };
  }, []);
}
