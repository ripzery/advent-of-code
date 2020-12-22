const { convertInputToArray } = require('../util')

const input = convertInputToArray('day6')

const inputs = []
let answers = []

for(let i = 0; i < input.length; i++) {
  if(input[i] === '') {
    inputs.push([...answers])
    answers = []
  }else {
    answers.push(input[i])
  }
}

function uniq(arr) {
  const questions = {}
  for(let i = 0; i < arr.length; i++) {
    questions[arr[i]] = 1
  }
  return Object.keys(questions).join('')
}

inputs.push(answers)
const flattenInputs = inputs.map(input => input.join('') )

const totalAnswers = flattenInputs.map(inp => uniq(inp)).reduce((acc, v) => acc + v.length, 0)

console.log(totalAnswers)


