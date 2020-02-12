
import React from 'react';
import Item from './Todo';
const ToDoList = props => {
    return (
        <div className="todo-list">
            {props.toDo.map( item => (
                <Item key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button type="button" className="clear-btn" onClick={props.removeCompleted}>
                Clear ToDo
            </button>
        </div>
    )
};
export default ToDoList;