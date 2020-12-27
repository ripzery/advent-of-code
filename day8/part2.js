const { convertInputToArray } = require('../util')

const input = convertInputToArray('day8')

function detect_loop(input, skip) {
  let value = 0
  const jmps = []

  for(let i = 0; i < input.length; i++) {
    if(skip === i) {
      i++
    }

    const [command, argument] = input[i].split(' ')

    if(command === 'jmp') {
      if(jmps.indexOf(i) === -1) {
        jmps.push(i)
      } else {
        return { result: false, value: jmps }
      }
    }

    if(command === 'acc') {
      value += parseInt(argument)
    }else if(command === 'jmp') {
      i += parseInt(argument - 1)
    }
  }
  return { result: true, value }
}

function find_issue(skip) {
  const { result, value } = detect_loop(input, skip)

  if(result) {
    return true
  } else {
    for(let i = value.length - 1; i >= 0; i--) {
      const { result, value: answer } = detect_loop(input, value[i])
      if(result) {
        return answer
      }
    }
  }
}


const answer = find_issue()
console.log(answer)
