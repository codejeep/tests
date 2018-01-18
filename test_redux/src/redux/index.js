import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

// let store = createStore(rootReducer)

export default store
