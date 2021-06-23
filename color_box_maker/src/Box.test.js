import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Box from './Box';

it("Doesn't Blow up", () => {
    render(<Box />);
});

it('should match previous snapshot', function () {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});



