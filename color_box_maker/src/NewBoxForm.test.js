import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from './NewBoxForm';

it("Doesn't Blow up", () => {
    render(<NewBoxForm />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("should allow users to type into the inputs", () =>{
    const { getByLabelText, getByText } = render(<NewBoxForm />);

    const heightInput = getByLabelText("Height: ");
    const widthInput = getByLabelText("Width: ");
    const colorInput = getByLabelText("Color: ");

    const btn = getByText("X");


    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(widthInput, { target: { value: "200" } });
    fireEvent.change(colorInput, { target: { value: "blue" } });

    fireEvent.click(btn);

    expect()
})


