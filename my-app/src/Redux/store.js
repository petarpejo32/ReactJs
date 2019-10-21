import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import userReducer from './reducers/userReducer.js'
import {usersTableReducer} from './reducers/usersTableReducer'



const singleReducer=combineReducers({
    userReducer,
    usersTableReducer
})
const store = createStore(
    singleReducer,
    applyMiddleware(logger)
    )

console.log(store.getState())

export default store