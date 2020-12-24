const { convertInputToArray } = require('../util')

const input = convertInputToArray('day8')

const history = []
let value = 0
for(let i = 0; i < input.length; i++) {
  const [command, argument] = input[i].split(' ')

  if(!history[i]) {
    history[i] = true
  }else {
    break;
  }

  switch(command) {
    case 'acc':
      value += parseInt(argument)
      break;
    case 'jmp':
      i += parseInt(argument) - 1
      break;
  }
}

console.log(value)
