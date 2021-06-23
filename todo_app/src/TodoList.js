import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
import {v4 as uuid } from 'uuid';


const TodoList = (props) => {
    const [ tasks, setTasks ] = useState([]);
    const addTask = title => setTasks(tasks => [...tasks, {title, id: uuid(), editing: false}]);
    const deleteTask = id => setTasks(tasks => tasks.filter(t => t.id !== id ));
    const editTask = id => 
        setTasks(tasks => 
            tasks.map(t => 
                t.id === id ? {...t, editing: true} : t
    ));
    const updateTask = ({ id, title }) => 
        setTasks(tasks => 
            tasks.map(t => 
                t.id === id ? { ...t, title, editing: false } : t
    ));


    return (
        <div className="TodoList">
            <NewTodoForm onSubmit={addTask} />
            <ul className="TodoList-list">
                {tasks.map(({ title, id, editing }) => 
                    editing ?
                        <EditTodoForm key={id} id={id} onSubmit={updateTask} content={title}/>
                    :   <Todo key={id} id={id} content={title} onClick={editTask} onDelete={deleteTask}/>
                )}
            </ul>
        </div>
    )
};
export default TodoList