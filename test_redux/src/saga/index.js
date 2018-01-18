import { put, take, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { COUNTER_INC, COUNTER_DEC } from '../redux/constants.js'
import { increment, decrement, reset } from '../actions'
import { Alert } from 'react-native'

export function *count() {
  while (true) {
    yield take (COUNTER_INC)
    Alert.alert("INCREMENT")
    // yield take (COUNTER_DEC)
    // Alert.alert("DECREMENT")

    yield put (increment())

    // yield take (COUNTER_DEC)
    // Alert.alert("DECREMENT")
  }

}

export default function * () {
  yield takeLatest(COUNTER_INC, count)
}