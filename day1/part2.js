const { convertInputToArray } = require('../util')
const input = convertInputToArray('day1')

function solve(target, inputs, numbers) {
  console.log(numbers, 'target: ' + target)
  if(numbers.length === 3 && target === 0) {
    return numbers.reduce((acc, v) => v * acc)
  } else if(numbers.length < 3) {
    for(let i = 0; i < inputs.length; i++) {
      const candidate = parseInt(inputs[i])
      const newTarget = target - candidate
      const newInputs = inputs.filter(i => parseInt(i) <= newTarget)
      const answer = solve(newTarget, newInputs.filter(i => parseInt(i) !== candidate), [...numbers, candidate])
      if(answer) return answer
    }
    return false
  }
}

const answer = solve(2020, input, [])

console.log(answer)
