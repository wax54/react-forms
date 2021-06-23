import React from "react";
import './Todo.css';

const Todo = ({ content, onClick, onDelete, id }) => {

    return (
    <div className="Todo">
        <span className="Todo-title" onClick={() => onClick(id)}>{ content }</span>
        <button className="Todo-delete" onClick={ () => onDelete(id) }>X</button>
    </div>
    )
};

export default Todo