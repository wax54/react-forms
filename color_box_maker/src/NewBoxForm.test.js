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
    let boxStats = {};

    const mockedOnSubmit = boxInfo => boxStats = boxInfo;

    const { getByLabelText, getByText } = render(<NewBoxForm onSubmit={mockedOnSubmit} />);

    const heightInput = getByLabelText("Height", { exact: false });
    const widthInput = getByLabelText("Width", { exact: false });
    const colorInput = getByLabelText("Color", { exact: false });

    const btn = getByText("Make me a Box", { exact: false });


    fireEvent.change(heightInput, { target: { value: "100" } });
    fireEvent.change(widthInput, { target: { value: "200" } });
    fireEvent.change(colorInput, { target: { value: "blue" } });

    fireEvent.click(btn);

    expect(boxStats).toEqual({height: "100", width: "200", color: "blue"});
})


