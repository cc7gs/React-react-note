import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './todoItem'
import { toggleTodo, removeTodo,IData } from '../actions';
import {FilterTypes} from '../../constants'
type IProps=Readonly<{
    todos:IData[];
    onToggleTodo:(id:string)=>void;
    onRemoveTodo:(id:string)=>void
}>
const TodoList=({todos,onToggleTodo,onRemoveTodo}:IProps)=>{
    return(
        <ul className="todo-list">
            {
                todos.map((item:any)=>{
                    return <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={()=>{ console.log(item.id); onToggleTodo(item.id)}}
                        onRemove={()=>onRemoveTodo(item.id)}
                    />
                })
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
const mapDispatchToProps={
        onToggleTodo:toggleTodo,
        onRemoveTodo:removeTodo
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
