import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import EditTodoForm from './EditTodoForm';

it("Doesn't Blow up", () => {
    render(<EditTodoForm />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<EditTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("input should pre populate with task", () => {
    const testTitle = "DEFAULT TASK";

    const { getByTestId } = render(<EditTodoForm onSubmit={() => undefined} content={testTitle} id={1}/>);

    const titleInput = getByTestId("EditTodoForm-input");

    expect(titleInput.value).toEqual(testTitle);
});

it("should allow users to type into the inputs", () => {
    const testTitle = "UPDATED TASK";
    const defaultTitle = "DEFAULT TASK";

    const { getByTestId } = render(<EditTodoForm onSubmit={() => undefined} content={defaultTitle} id={1} />);

    const titleInput = getByTestId("EditTodoForm-input");

    fireEvent.change(titleInput, { target: { value: testTitle } });
    expect(titleInput.value).toEqual(testTitle);
});

it("should pass input data to the passed function when submited", () =>{
    const testTitle = "UPDATED TASK";
    const defaultTitle = "DEFAULT TASK";

    let submittedData;
    const mockedOnSubmit = (data) => submittedData = data;

    const { getByText, getByTestId } = render(<EditTodoForm onSubmit={mockedOnSubmit} content={defaultTitle} id={1} />);

    const titleInput = getByTestId("EditTodoForm-input");
    fireEvent.change(titleInput, { target: { value: testTitle } });

    const btn = getByText("Update");

    fireEvent.click(btn);

    expect(submittedData).toEqual({title: testTitle, id: 1});
});


