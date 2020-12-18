const { convertInputToArray } = require('../util')
const inputs = convertInputToArray('day3')

const move = {
  x: 3,
  y: 1
}

const position = {
  x: 0,
  y: 0
}

let trees = 0

while(position.y <= inputs.length) {
  position.x = (position.x + move.x) % inputs[0].length
  position.y += move.y

  if(inputs[position.y] && inputs[position.y][position.x] === '#') {
    trees++
  }
}

console.log(trees)
