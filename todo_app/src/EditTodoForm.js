import React, { useState } from "react";
import './EditTodoForm.css';

const EditTodoForm = ({ onSubmit, content, id }) => {
    const INITIAL_STATE = content;
    const [title, setTitle] = useState(INITIAL_STATE);
    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit({id, title});
        setTitle(INITIAL_STATE);
    }

    const handleChange = (evt) => setTitle(evt.target.value);

    return (
        <form className="EditTodoForm" onSubmit={handleSubmit}>
            <label htmlFor="title-input"></label>
            <input
                data-testid="EditTodoForm-input"
                className="EditTodoForm-title"
                id="title-input"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder={content}
                required
            />
            <button>Update</button>

        </form>
    )
};
export default EditTodoForm