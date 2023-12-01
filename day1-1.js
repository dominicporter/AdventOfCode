fetch('https://adventofcode.com/2023/day/1/input', {
  headers: {
    Cookie:
      'session=53616c7465645f5f57a898b0ffc625888ae05cfca6aed796dd433b0ebdac6a3d46b886dc1cb69c89195ae0254f796e7cbd1e2d9974996c8633deb4da5cddaaa9',
  },
})
  .then((response) => response.text())
  .then((data) => {
    // console.log(data); // Display the text content
    const numbers = data.split('\n').filter(d=>d).map((line) => {
        // console.log(line)
      const firstAndLast = line.split('').reduce((acc, curr) => {
        if (!isNaN(Number(curr))) {
          // curr is a digit
          if (acc.first) {
            // acc.first is already set
            // console.log(acc.first, curr);
            return { first: acc.first, last: curr };
          }
          return { first: curr, last: curr };
        }
        // curr is not a digit
        return acc;
      }, {});
      return firstAndLast.first + firstAndLast.last;
    });
    // console.log(numbers[numbers.length - 1]);
    console.log('ANSWER ' + numbers.reduce((acc, curr) => {
        // console.log(parseInt(curr))
        return acc + parseInt(curr);
    }, 0));
  })
  .catch((error) => {
    console.log('Error:', error);
  });
