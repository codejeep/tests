import { fork } from 'redux-saga/effects'
import { count } from '../saga'

export default function * rootSaga () {
  yield [
    fork(count)
  ]
}