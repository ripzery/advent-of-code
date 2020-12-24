const { convertInputToArray } = require('../util')

const input = convertInputToArray('day7')

const bags = {}
for(let i = 0 ; i< input.length; i++){
  const parts = input[i].split(' ')
  const name = parts[0] + ' ' + parts[1]
  const deps = input[i].split('contain')[1].trim()
  if(/[1-9]/.test(deps[0])) {
    // contains other bag
    const child_bags = deps.split(/[1-9,\s]\s/).filter(bag => bag).map(bag => bag.split(' ').slice(0, 2).join(' '))
    bags[name] = child_bags
  } else {
    // contain nothing
    bags[name] = []
  }
}

function parent_traversal(bag, bags) {
  const parent = Object.keys(bags).filter(b => bags[b].indexOf(bag) > -1)

  if(parent.length === 0) {
    return []
  }else {
    const recursive_parent = parent.flatMap(p => parent_traversal(p, bags))
    return parent.concat(recursive_parent)
  }
}

const total_parent_bags = new Set(parent_traversal('shiny gold', bags)).size

console.log(total_parent_bags)
