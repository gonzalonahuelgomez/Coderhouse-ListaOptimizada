import { combineReducers, createStore } from 'redux'

import todos from './tasks.reducer'

const todoApp = combineReducers({ todos })

export default createStore(todoApp)