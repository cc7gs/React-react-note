import {reducer as filterReducer} from '../filter'
import {reducer as todoReducer} from '../todos'
import {createStore,combineReducers,compose, applyMiddleware}from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const win:any=window;



const middlewres=[];
//判断有没中间件
if(process.env.NODE_ENV === 'production'){
    //这里添加中间件
}
const storeEnhancers=compose(
    applyMiddleware(),
    composeWithDevTools()
);

//集成reducer
const reducer=combineReducers({
    todos:todoReducer,
    filter:filterReducer
})

export default createStore(reducer,{},storeEnhancers);