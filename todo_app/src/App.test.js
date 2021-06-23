import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import App from './App';

it("Doesn't Blow up", () => {
    render(<App />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});

// it("should add a new box to the DOM", () => {
//     let boxStats = {};

//     const { getByLabelText, getByText, getByTestId } = render(<App />);

//     const heightInput = getByLabelText("Height", { exact: false });
//     const widthInput = getByLabelText("Width", { exact: false });
//     const colorInput = getByLabelText("Color", { exact: false });

//     const btn = getByText("Make me a Box", { exact: false });


//     fireEvent.change(heightInput, { target: { value: "100" } });
//     fireEvent.change(widthInput, { target: { value: "200" } });
//     fireEvent.change(colorInput, { target: { value: "blue" } });

//     fireEvent.click(btn);

//     expect(getByTestId("BoxElement")).toBeInTheDocument();
// });

// it("should remove a box from the DOM when it's X is clicked", () => {
//     let boxStats = {};

//     const { getByLabelText, getByText, getByTestId, queryByTestId } = render(<App />);
//     //setup START
//     const heightInput = getByLabelText("Height", { exact: false });
//     const widthInput = getByLabelText("Width", { exact: false });
//     const colorInput = getByLabelText("Color", { exact: false });

//     const btn = getByText("Make me a Box", { exact: false });

//     fireEvent.change(heightInput, { target: { value: "100" } });
//     fireEvent.change(widthInput, { target: { value: "200" } });
//     fireEvent.change(colorInput, { target: { value: "blue" } });

//     fireEvent.click(btn);
//     expect(queryByTestId("BoxElement")).toBeInTheDocument();
//     //Setup END

//     const deleteBoxBtn = getByText("X");
//     fireEvent.click(deleteBoxBtn);

//     expect(queryByTestId("BoxElement")).not.toBeInTheDocument();
// })
