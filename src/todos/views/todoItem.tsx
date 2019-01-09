import React from 'react'
const TodoItem = (props: any) => {
    const { onToggle, onRemove, completed, text } = props;
    const checkedProp = completed ? {checked: true} : {};
    return (<li
        className="todo-item"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        <input className="toggle" type='checkbox' {...checkedProp} readOnly onClick={onToggle} />
        <label className="text">{text}</label>
        <button className='remove' onClick={onRemove}>x</button>
    </li>);
}
export default TodoItem;