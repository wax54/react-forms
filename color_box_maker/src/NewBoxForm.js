import React, { useState } from "react";


const NewBoxForm = ({onSubmit}) => {
    const INITIAL_FORM_DATA = {
        height: '',
        width: '',
        color: ''
    };
    const [formData, setFormData] = useState(INITIAL_FORM_DATA); 

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(data => ({...data, [name]: value}))
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmit(formData);
        setFormData(INITIAL_FORM_DATA);
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="height-input">Height: </label>
        <input id="height-input" 
            type="number" 
            name="height" 
            min="0"
            value={formData.height} 
            onChange={handleChange}
            required
        />
        <label htmlFor="width-input">Width: </label>
        <input id="width-input" 
            type="number" 
            name="width" 
            min="0"
            value={formData.width} 
            onChange={handleChange}
            required
        />
        
        <label htmlFor="color-input">Color: </label>
        <input id="color-input" 
            type="text" 
            name="color" 
            value={formData.color}
            onChange={handleChange}
            required
        />
        <button>Make me a Box!</button>
    </form>
    )
};

export default NewBoxForm;
