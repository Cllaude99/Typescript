import {range} from '../01/range'

const array: number[] = range(1, 10 + 1)
const half = array.length / 2

let belowHalf: number[] = array.filter((value, index) => index < half)
let overHalf: number[] = array.filter((value, index) => index >= half)