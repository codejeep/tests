import { COUNTER_INC, COUNTER_DEC, COUNTER_RESET } from '../redux/constants.js'

const defaultState = {
  count: 0
}

const CounterReducer = (state = defaultState, action) => {
  switch (action.type) {
      case COUNTER_INC:
          return Object.assign({}, state, {
              count: state.count + 1
          });
      case COUNTER_DEC:
          return Object.assign({}, state, {
             count: state.count - 1
          });
      case COUNTER_RESET:
          return Object.assign({}, state, {
             count: 0
          });
      default:
          return state;
  }
}

export default CounterReducer