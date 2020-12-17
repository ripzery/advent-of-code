const { convertInputToArray } = require('../util')
const inputs = convertInputToArray('day2')

let valid = 0

for(let i = 0; i < inputs.length; i++) {
  const [first, second] = inputs[i].split(' ')[0].split('-')
  const letter = inputs[i].split(' ')[1][0]
  const text = inputs[i].split(' ')[2]
  if(text[parseInt(first) - 1] === letter && text[parseInt(second) - 1] !== letter) {
    valid++
  }

  if(text[parseInt(first) - 1] !== letter && text[parseInt(second) - 1] === letter) {
    valid++
  }
}

console.log(valid)
