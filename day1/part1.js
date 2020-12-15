const { convertInputToArray } = require('../util')

const input = convertInputToArray()

for(let i = 0; i < input.length - 1; i++){
  const first = parseInt(input[i])
  for(let j = i+1; j< input.length; j++) {
    const second = parseInt(input[j])
    if(first + second == 2020) {
      console.log(first * second)
      return first * second
    }
  }
}
