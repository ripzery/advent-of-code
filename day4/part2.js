const { convertInputToArray, writeToFile } = require('../util')

function process(inputs) {
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
    const valid_required_fields = filled_fields === require_fields.length
    const valid_valid_values = check_field(passport)
    return acc + (valid_required_fields && valid_valid_values ? 1 : 0)
  } , 0)
}

function check_field(field) {
  let valid_fields = 0
  for(let i = 0; i < require_fields.length; i++){
    const field_name = require_fields[i]
    console.log(field_name + ' ' + field[field_name], validate_field(field_name, field[field_name]))
    valid_fields += validate_field(field_name, field[field_name]) ? 1 : 0
  }
  console.log('\n')
  return valid_fields === require_fields.length
}

function validate_field(field_name, value) {
  try{
    switch (field_name){
      case 'byr':
        return parseInt(value) <= 2002 && parseInt(value) >= 1920
      case 'iyr':
        return parseInt(value) <= 2020 && parseInt(value) >= 2010
      case 'eyr':
        return parseInt(value) <= 2030 && parseInt(value) >= 2020
      case 'hgt':
        const unit = value.slice(-2)
        if(unit !== 'cm' && unit !== 'in' ) return false
        const height = parseInt(value.substring(0, unit === 'cm' ? 3 : 2 ))
        return unit === 'cm' ? (height <= 193 && height >= 150) : (height >= 59 && height <= 76)
      case 'hcl':
        return /^#[0-9a-f]{6}/.test(value)
      case 'ecl':
        return 'amb blu brn gry grn hzl oth'.split(' ').indexOf(value) > -1
      case 'pid':
        return value.length === 9 && /^[0-9]{9}/.test(value)
      default:
        return false
    }
  } catch(e) {
    return false
  }
}

const passports = process(convertInputToArray('day4'))

writeToFile('day4', passports)

console.log(count_valid(passports) + ' out of ' + passports.length)
