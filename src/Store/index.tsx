import {createStore,combineReducers}from 'redux'
import {reducer as filterReducer} from '../filter'
import {reducer as todoReducer} from '../todos'

const reducer=combineReducers({
    todos:todoReducer,
    filter:filterReducer
})
export default createStore(reducer);