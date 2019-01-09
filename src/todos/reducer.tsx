import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO,IData} from "./actionTypes";

const initState:IData[]=[{
    id:9999,
    text:'cc',
    completed:false
}]
export default (state=initState, action: any) => {
    switch (action.type) {
        case ADD_TODO: {
            console.log('add');
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
            return state.map((todoItem: any) => {
                if (todoItem.id === action.id) {
                    return { ...todoItem, completed: !todoItem.completed }
                } else {
                    return todoItem
                }
            });
        }
        case REMOVE_TODO: {
            console.log('remove');
            return state.filter((todoItem: any) => {
                return todoItem.id !== action.id;
            })
        }
        default: {
            return state;
        }
    }
}