import React from 'react';
import ReactDOM from 'react-dom';
import '../css/todo-list.css'

import ToDoListItem from './todo-list-item';

const ToDoList = ({toDoList, onDelete, onToggleImportant, onToggleDone}) => {

    const elements = toDoList.map((item) => {

            return (<li className="todo-list-item-external" key={item.id}>
                <ToDoListItem
                    lable={item.lable}
                    id = {item.id}
                    done={item.done}
                    important={item.important}
                    onDelete={() => onDelete(item.id)}
                    onToggleImportant={() => onToggleImportant(item.id)}
                    onToggleDone={() => onToggleDone(item.id)}
                />
            </li>)

    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}

export default ToDoList;