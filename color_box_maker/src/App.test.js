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
