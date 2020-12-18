const { convertInputToArray } = require('../util')
const inputs = convertInputToArray('day3')

const moveList = [
  {x: 1, y: 1},
  {x: 3, y: 1},
  {x: 5, y: 1},
  {x: 7, y: 1},
  {x: 1, y: 2}
]

const positionList = [
  {x: 0, y: 0},
  {x: 0, y: 0},
  {x: 0, y: 0},
  {x: 0, y: 0},
  {x: 0, y: 0},
]

let trees = []
function count_trees(position, move){
  let trees = 0
  while(position.y <= inputs.length) {
    position.x = (position.x + move.x) % inputs[0].length
    position.y += move.y

    if(inputs[position.y] && inputs[position.y][position.x] === '#') {
      trees++
    }
  }
  return trees
}

for(let i = 0; i < positionList.length; i++) {
  const tree = count_trees(positionList[i], moveList[i])
  trees.push(tree)
}

console.log(trees, trees.reduce((acc, v) => acc * v))
