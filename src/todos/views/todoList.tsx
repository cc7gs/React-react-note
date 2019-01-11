import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './todoItem'
import {IData } from '../actions';
import {FilterTypes} from '../../constants'
type IProps=Readonly<{
    todos:IData[];
}>
const TodoList=({todos}:IProps)=>{
    return(
        <ul className="todo-list">
            {
                todos.map((item)=>(
                     <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        completed={item.completed}
                    />
                ))
            }
        </ul>
    )
}
const selectVisible=(todos:IData[],filter:string)=>{
    switch(filter){
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter((item:IData)=>item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter((item:IData)=>!item.completed)
        default:
            throw new Error('unsupported filter');
    }
}
const mapStateToProps=(state:any)=>{
    return{
        todos:selectVisible(state.todos,state.filter)
    }
}
export default connect(mapStateToProps)(TodoList);
