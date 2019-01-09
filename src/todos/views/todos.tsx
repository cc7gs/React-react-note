import React from 'react';
import AddTodo from './addTodo'
import TodoList from './todoList'
import './index.css'
export default () => {
    return (
        <div className="todos">
            <AddTodo></AddTodo>
            <TodoList></TodoList>
        </div>
    )
}