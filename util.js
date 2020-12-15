const fs = require('fs')

function convertInputToArray() {
  const input = fs.readFileSync('./day1/input.txt', 'utf-8')
  return input.split('\n').slice(0, -1)
}

module.exports = {
  convertInputToArray
}
