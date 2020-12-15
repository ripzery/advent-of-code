const fs = require('fs')

function convertInputToArray() {
  const input = fs.readFileSync('./day1/input.txt', 'utf-8')
  return input.split('\n').slice(0, -1)
}

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
