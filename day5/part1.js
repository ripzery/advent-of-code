const { convertInputToArray } = require('../util')

const input = convertInputToArray('day5')

function decode_row(row) {
  let last_row = 2 ** row.length - 1
  let r = last_row
  let l = 0
  for(let i = 0; i < row.length; i++){
    last_row = 2 ** (row.length - i) - 1
    if(row[i] == 'B') {
      l += parseInt(last_row / 2) + 1
    }else {
      r -= parseInt(last_row / 2) + 1
    }
    // console.log('Found ' + row[i], `[${l}, ${r}]`)
  }
  return l
}

function decode_column(column) {
  let last_column = 2 ** column.length - 1
  let r = last_column
  let l = 0
  for(let i = 0; i < column.length; i++){
    last_column = 2 ** (column.length - i) - 1
    if(column[i] == 'R') {
      l += parseInt(last_column / 2) + 1
    }else {
      r -= parseInt(last_column / 2) + 1
    }
    // console.log('Found ' + column[i], `[${l}, ${r}]`)
  }
  return l
}

function calculate_seat_id({ row, column}) {
  return row * 8 + column
}

function decode(input) {
  const seatIds = []
  for(let i = 0; i < input.length; i++){
    const encoded_row = input[i].slice(0, 7)
    const encoded_column = input[i].slice(-3)
    const row = decode_row(encoded_row)
    const column = decode_column(encoded_column)
    const seatId = calculate_seat_id({ row, column })
    seatIds.push(seatId)
  }
  return seatIds
}

const seatIds = decode(input)
console.log(seatIds.sort((a, b) => parseInt(b) - parseInt(a)))



