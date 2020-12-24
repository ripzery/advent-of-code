const { convertInputToArray } = require('../util')

const input = convertInputToArray('day7')

const bags = {}
for(let i = 0 ; i< input.length; i++){
  const parts = input[i].split(' ')
  const name = parts[0] + ' ' + parts[1]
  const deps = input[i].split('contain')[1].trim()
  if(/[1-9]/.test(deps[0])) {
    // contains other bag
    const child_bags = deps.split(/[,\s]\s/).filter(bag => bag).map(bag => bag.split(' ').slice(0, 3))
    bags[name] = child_bags.map(([amount, name_1, name_2]) => ({
      name: name_1 + ' ' + name_2,
      amount: parseInt(amount)
    }))
  } else {
    // contain nothing
    bags[name] = []
  }
}

function bag_traversal(bag, bags) {
  const children = Object.keys(bags)
    .filter(key => bag.indexOf(key) > -1)
    .flatMap(p => bags[p])

  console.log(bag + ' => ', '[' + children.map( c => c.name).join(', ') + ']')

  if(children.length === 0) {
    return 1
  }else {
    return children.reduce((acc, p) => {
      const recursive_bags = bag_traversal(p.name, bags)
      return acc + p.amount * recursive_bags + (recursive_bags > 1 ? p.amount : 0)
    }, 0)
  }
}

// console.log(Object.keys(bags).length)

const total_parent_bags = bag_traversal('shiny gold', bags)

console.log(total_parent_bags)
