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


it("should allow users to type into the inputs", () => {
    let boxStats = {};

    const mockedOnSubmit = boxInfo => boxStats = boxInfo;

    const { getByLabelText, getByText, debug } = render(<NewBoxForm onSubmit={mockedOnSubmit} />);

    //Height input
    const heightInput = getByLabelText("Height", { exact: false });
    expect(heightInput.value).toEqual("");
    fireEvent.change(heightInput, { target: { value: "100" } });
    expect(heightInput.value).toEqual("100");

    //Width input
    const widthInput = getByLabelText("Width", { exact: false });
    expect(widthInput.value).toEqual("");
    fireEvent.change(widthInput, { target: { value: "200" } });
    expect(widthInput.value).toEqual("200");

    //Color input
    const colorInput = getByLabelText("Color", { exact: false });
    expect(colorInput.value).toEqual("");
    fireEvent.change(colorInput, { target: { value: "blue" } });
    expect(colorInput.value).toEqual("blue");

});

it("should pass input data to the passed function when submited", () =>{
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
});


