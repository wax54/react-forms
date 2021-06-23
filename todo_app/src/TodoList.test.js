import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';

it("Doesn't Blow up", () => {
    render(<TodoList />);
});

it("should match previous snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a todo to the list", () => {
    const testTitle = "NEW TASK";

    const { getByLabelText, getByText } = render(<TodoList />);

    const titleInput = getByLabelText("Task", { exact: false });
    fireEvent.change(titleInput, { target: { value: testTitle } });

    const btn = getByText("Add Todo", { exact: false });

    fireEvent.click(btn);

    expect(getByText(testTitle)).toBeInTheDocument();
});

it("should change a todo to edit mode when clicked", () => {
    const testTitle = "NEW TASK";

    const { getByLabelText, getByText, queryByTestId} = render(<TodoList />);
    //Adding Todo to the dom
    const titleInput = getByLabelText("Task", { exact: false });
    fireEvent.change(titleInput, { target: { value: testTitle } });
    const btn = getByText("Add Todo", { exact: false });
    fireEvent.click(btn);
    const task = getByText(testTitle);
    //expect the edit form not to be there
    expect(queryByTestId("EditTodoForm-input")).not.toBeInTheDocument()

    //click the task
    fireEvent.click(task);
    //expect the todo to be gone...
    expect(task).not.toBeInTheDocument();
    //... and the edit form to appear
    expect(queryByTestId("EditTodoForm-input")).toBeInTheDocument()
});



it("should delete a todo when it's 'X' is clicked", () => {
    const testTitle = "NEW TASK";

    const { getByLabelText, getByText, queryByTestId } = render(<TodoList />);
    //Adding Todo to the dom
    const titleInput = getByLabelText("Task", { exact: false });
    fireEvent.change(titleInput, { target: { value: testTitle } });
    const btn = getByText("Add Todo", { exact: false });
    fireEvent.click(btn);
    const task = getByText(testTitle);
    expect(task).toBeInTheDocument();

    fireEvent.click(getByText('X'));
    
    expect(task).not.toBeInTheDocument();
});