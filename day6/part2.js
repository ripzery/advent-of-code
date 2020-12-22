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

function union(arr) {
  const questions = {}
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      questions[arr[i][j]] = (questions[arr[i][j]] || 0) + 1
    }
  }

  return Object.keys(questions).filter(key => questions[key] === arr.length).join('')
}

inputs.push(answers)

const totalAnswers = inputs.map(inp => union(inp)).reduce((acc, v) => acc + v.length, 0)

console.log(totalAnswers)


