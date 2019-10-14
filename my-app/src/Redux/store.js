import {createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducer.js'

const singleReducer=combineReducers({
    userReducer,
})
const store = createStore(userReducer)

console.log(store.getState())

export default store