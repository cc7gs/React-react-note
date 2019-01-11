import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "./actionTypes";
import {IData} from './actions'
const initState:IData[]=[{
    id:9999,
    text:'cc',
    completed:false
}]
type IAction=Readonly<{
    type:string;
}>&IData;

export default (state=initState, action:IAction) => {
    switch (action.type) {
        case ADD_TODO: {
            return [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ];
        }
        case TOGGLE_TODO: {
            console.log('toggle');
            return state.map((todoItem: IData) => {
                if (todoItem.id === action.id) {
                    return { ...todoItem, completed: !todoItem.completed }
                } else {
                    return todoItem
                }
            });
        }
        case REMOVE_TODO: {
            return state.filter((todoItem: IData) => {
                return todoItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}