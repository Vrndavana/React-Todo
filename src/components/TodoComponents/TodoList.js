import React from 'react';
import Item from './Todo';
const ToDoList = props => {
    return (
        <div className="todo-list">
            {props.toDo.map( item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear ToDo
            </button>
        </div>
    )
};
export default ToDoList;