import {createStore,combineReducers,compose, applyMiddleware}from 'redux'
import {reducer as filterReducer} from '../filter'
import {reducer as todoReducer} from '../todos'
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer=combineReducers({
    todos:todoReducer,
    filter:filterReducer
})
const middlewres=[];
//判断有没中间件
if(process.env.NODE_ENV === 'production'){
    //这里添加中间件
}
const storeEnhancers=compose(
    applyMiddleware(),
    composeWithDevTools()
)
export default createStore(reducer,{},storeEnhancers);