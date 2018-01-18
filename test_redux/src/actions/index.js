import { COUNTER_INC, COUNTER_DEC, COUNTER_RESET } from '../redux/constants.js'

export function increment () {
  return {
    type: COUNTER_INC
  }
}

export function decrement () {
  return {
    type: COUNTER_DEC
  }
}

export function reset () {
  return {
    type: COUNTER_RESET
  }
}