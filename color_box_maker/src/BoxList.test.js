import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import BoxList from './BoxList';

it("Doesn't Blow up", () => {
    render(<BoxList />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});
