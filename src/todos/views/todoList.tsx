import React from 'react'
import {connect} from 'react-redux'
import TodoItem from './todoItem'
import { toggleTodo, removeTodo } from '../actions';
const TodoList=({todos,onToggleTodo,onRemoveTodo}:any)=>{
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
const mapStateToProps=(state:any)=>{
    console.log(state);
    return{
        todos:state.todos
    }
}
const mapDispatchToProps={
        onToggleTodo:toggleTodo,
        onRemoveTodo:removeTodo
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);