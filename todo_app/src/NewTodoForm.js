import React, { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
    const INITIAL_STATE = "";
    const [title, setTitle] = useState(INITIAL_STATE);
    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(title);
        setTitle(INITIAL_STATE);
    }

    const handleChange = (evt) => setTitle(evt.target.value);
    
    return (
        <form className="NewTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="title-input">Task: </label>
            <input 
                id="title-input"
                type="text" 
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Wash Dog"
                required
            />
            <button>Add Todo</button>

        </form>
    )
};
export default NewTodoForm