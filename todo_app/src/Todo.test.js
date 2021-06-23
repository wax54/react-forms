import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Todo from './Todo';

it("Doesn't Blow up", () => {
    render(<Todo />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<Todo content="NEW" id="SOMEID" onDelete={() => undefined} onClick={() => undefined}/>);
    expect(asFragment()).toMatchSnapshot();
});
