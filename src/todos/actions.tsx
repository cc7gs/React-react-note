import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes'

let nextTodoId = 0;
export const addTodo=(text:string) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId++,
    text
});
export const toggleTodo = (id:string) => ({
    type: TOGGLE_TODO,
    id,
});
export const removeTodo= (id:string) => ({
    type: REMOVE_TODO,
    id
});
