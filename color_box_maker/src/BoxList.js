import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [ boxes, setBoxes ] = useState([{id: uuid(), width: 100, height:100, color: 'black'}]);
    const addNewBox = ({width, height, color}) => {
        setBoxes(boxes => [...boxes, { id: uuid(), width, height, color }])
    };
    const deleteBox = deleteId => {
        setBoxes( allBoxes => {
            return allBoxes.filter( ({id}) => id !== deleteId)
        })
    };

    return (
        <div className="BoxList">
            { 
            boxes.map(({id, width, height, color}) => 
                <Box key={id} id={id} width={width} height={height} color={color} deleteBox={deleteBox}/>)
            }
            <NewBoxForm onSubmit={addNewBox} /> 
        </div>
    )
};

export default BoxList;
