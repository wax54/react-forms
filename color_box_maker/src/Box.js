import React from "react";
import './Box.css';


const Box = ({height, width, color, deleteBox, id}) => {
    const boxStyle = { height: `${height}px`, width: `${width}px`, backgroundColor: color }
    return (
        <>
            <div className="Box" style={boxStyle} data-testid="BoxElement"></div>
            <button onClick={() => deleteBox(id)}>X</button>
        </>
    );
}

export default Box;
