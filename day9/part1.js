const { SSL_OP_NO_TLSv1_1 } = require('constants')
const { convertInputToArray } = require('../util')

const input = convertInputToArray('day9')

function find_possible_sums(target, numbers) {
  const pairs = []
  const possible_numbers = []
  for(let i = 0; i < numbers.length; i++){
    const first = i
    if(numbers.indexOf(target-numbers[first]) > -1) {
      const second = numbers.indexOf(target-numbers[first])
      if(second == first) break;

      const unique = possible_numbers.indexOf(numbers[first]) === -1
      if(unique){
        possible_numbers.push(numbers[first])
        possible_numbers.push(numbers[second])
        pairs.push([first, second])
      }
    }
  }
  return pairs
}

const max_preamble = 5
let preamble = 0
function update_arr(arr, used_number_index, new_number) {
  if (preamble >= max_preamble && arr.length > max_preamble){
    preamble++
    return [...arr.slice(arr.length - 4), new_number]
  } else if (arr.indexOf(new_number) > -1) {
    return
  } else {
    preamble++
    return [...arr.slice(0, used_number_index), ...arr.slice(used_number_index + 1), new_number]
  }


}

function find_invalid_number(index, arr) {
  const target = parseInt(input[index])
  const possible_pairs  = find_possible_sums(target, arr)
  if(possible_pairs.length > 0) {
    let answer
    for(let i = 0; i < possible_pairs.length; i++) {
      const [first, second] = possible_pairs[i]
      const newArr = update_arr(arr, first, target, index)
      answer = find_invalid_number(index + 1, newArr)
    }

    if(answer.index > index) return answer
    else return { index, target }
  } else {
    return { index, target }
  }
}

const initial = new Array(25).fill(0).map((v, i) => i + 1)
console.log(find_invalid_number(0, initial))
