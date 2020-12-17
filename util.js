const fs = require('fs')

function convertInputToArray(dir) {
  const input = fs.readFileSync(`./${dir}/input.txt`, 'utf-8')
  return input.split('\n').slice(0, -1)
}

module.exports = {
  convertInputToArray
}
