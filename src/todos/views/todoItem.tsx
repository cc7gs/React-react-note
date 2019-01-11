import React from 'react'
import { toggleTodo, removeTodo } from '../actions';

import { connect } from 'react-redux'
const TodoItem = (props: any) => {
    const { onToggle, onRemove, completed, text } = props;
    const checkedProp = completed ? { checked: true } : {};
    return (<li
        className="todo-item"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        <input className="toggle" type='checkbox' {...checkedProp} readOnly onClick={onToggle} />
        <label className="text">{text}</label>
        <button className='remove' onClick={onRemove}>x</button>
    </li>);
}
const mapDispatchToProps = (dispath: any, ownProps: any) => {
    const { id } = ownProps;
    return {
        onToggle: () => { console.log('onToggle'); dispath(toggleTodo(id)) },
        onRemove: () => dispath(removeTodo(id))
    }
}
//木偶组件应该用connect包起来，用来判断props 防止组件多次重复渲染
export default connect(null,mapDispatchToProps)(TodoItem);