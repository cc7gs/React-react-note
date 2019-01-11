import {reducer as filterReducer} from '../filter'
import {reducer as todoReducer} from '../todos'
import {reducer as weatherReducer} from '../weather'
import {createStore,combineReducers,compose, applyMiddleware}from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
const win:any=window;



const middlewres=[thunk];
//判断有没中间件
if(process.env.NODE_ENV === 'production'){
    //这里添加中间件
}
const storeEnhancers=compose(
    applyMiddleware(...middlewres),
    composeWithDevTools()
);

//集成reducer
const reducer=combineReducers({
    todos:todoReducer,
    filter:filterReducer,
    weather:weatherReducer
})

export default createStore(reducer,storeEnhancers);