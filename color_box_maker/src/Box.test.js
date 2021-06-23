import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Box from './Box';

it("Doesn't Blow up", () => {
    render(<Box />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<Box 
        width={100} 
        height={100} 
        color="blue" 
        id="1"
        deleteBox={(id)=> console.log(`Box ${id} Deleted`)} 
        />);
    expect(asFragment()).toMatchSnapshot();
});


it('should call the passed function when the "X" is clicked', function () {
    let boxDeleted = false;
    const { getByText } = render(<Box
        width={100}
        height={100}
        color="blue"
        id="1"
        deleteBox={(id) => boxDeleted = true}
    />);
    const deleteButton = getByText('X');
    fireEvent.click(deleteButton);
    expect(boxDeleted).toBeTruthy();
});



