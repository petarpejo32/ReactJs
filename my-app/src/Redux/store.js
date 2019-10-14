import {createStore} from 'redux'
import userReducer from './reducers/userReducer.js'

const store = createStore(userReducer)

console.log(store.getState())

export default store