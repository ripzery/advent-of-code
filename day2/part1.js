const { convertInputToArray } = require('../util')
const inputs = convertInputToArray('day2')

function count_letter(text, letter) {
  let count = 0
  for(let i = 0 ; i < text.length; i++){
    if(text[i] === letter) {
      count++
    }
  }
  return count
}

let valid = 0

for(let i = 0; i < inputs.length; i++) {
  const [min, max] = inputs[i].split(' ')[0].split('-')
  const letter = inputs[i].split(' ')[1][0]
  const text = inputs[i].split(' ')[2]
  const total_occurences = count_letter(text, letter)
  if(total_occurences >= min && total_occurences <= max) {
    valid++
  }
}

console.log(valid)
