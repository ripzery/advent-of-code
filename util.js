const fs = require('fs')

function convertInputToArray(dir) {
  const input = fs.readFileSync(`./${dir}/input.txt`, 'utf-8')
  return input.split('\n').slice(0, -1)
}

function writeToFile(dir, obj) {
  fs.writeFileSync(`./${dir}/output.txt`, JSON.stringify(obj, null, 2), 'utf8')
}

module.exports = {
  convertInputToArray,
  writeToFile
}
