import { createStore, applyMiddleware } from 'redux'
import app from './reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore () {
  const store = createStore(app, applyMiddleware(logger, sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}
