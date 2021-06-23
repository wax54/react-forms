import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from './NewTodoForm';

it("Doesn't Blow up", () => {
    render(<NewTodoForm />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});


it("should allow users to type into the inputs", () => {
    const testTitle = "NEW TASK";

    const { getByLabelText } = render(<NewTodoForm onSubmit={() => undefined} />);

    const titleInput = getByLabelText("Task", { exact: false });
    expect(titleInput.value).toEqual("");
    fireEvent.change(titleInput, { target: { value: testTitle } });
    expect(titleInput.value).toEqual(testTitle);
});

it("should pass input data to the passed function when submited", () =>{
    const testTitle = "NEW TASK";

    let submittedTitle;

    const mockedOnSubmit = title => submittedTitle = title;


    const { getByLabelText, getByText } = render(<NewTodoForm onSubmit={mockedOnSubmit} />);

    const titleInput = getByLabelText("Task", { exact: false });
    fireEvent.change(titleInput, { target: { value: testTitle } });

    const btn = getByText("Add Todo", { exact: false });

    fireEvent.click(btn);

    expect(submittedTitle).toEqual(testTitle);
});


