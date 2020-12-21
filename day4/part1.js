const { convertInputToArray, writeToFile } = require('../util')

function process(inputs) {
  console.log(inputs)
  let passports = []
  let passport = {}
  for(let i = 0; i < inputs.length; i++) {
    if(inputs[i].length) {
      const fields = inputs[i].split(' ')
      for(let field of fields) {
        const [key, value] = field.split(':')
        passport[key] = value
      }
    } else {
      passports.push({...passport})
      passport = {}
    }
  }
  passports.push(passport)
  return passports
}

const require_fields = [
  'byr',
  'ecl',
  'eyr',
  'hcl',
  'hgt',
  'iyr',
  'pid'
]

function count_valid(passports) {
  return passports.reduce((acc, passport) => {
    const filled_fields = require_fields.reduce((acc, field) => acc + (passport[field] ? 1 : 0), 0)
    console.log(filled_fields, require_fields.length)
    return acc + (filled_fields === require_fields.length ? 1 : 0)
  } , 0)
}

const passports = process(convertInputToArray('day4'))

writeToFile('day4', passports)

console.log(count_valid(passports) + ' out of ' + passports.length)
