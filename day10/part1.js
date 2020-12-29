const { convertInputToArray } = require('../util')

const input = convertInputToArray('day10')
  .map(i => parseInt(i))
  .sort((a, b) => a - b)

const diff = {
  one: 0,
  three: 0
}

for(let i = 0; i < input.length; i++) {
  const d = input[i] - (input[i - 1] || 0)

  switch(d) {
    case 3:
      diff.three++
      break;
    case 1:
      diff.one++
      break;
  }
}
diff.three++


// answer: [1, ]
console.log(diff.one * diff.three)
