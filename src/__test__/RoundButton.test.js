import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../components/RoundButton';
import { render } from '@testing-library/react';

describe("Round Button", () => {
    it("renders buttton without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<Button></Button>, div)
        ReactDOM.unmountComponentAtNode(div);
    })

    it("renders button correctly", () => {
        const { getByTestId } = render(<Button value="Click Here"></Button>)
        expect(getByTestId('button')).toHaveTextContent("Click Here")
    });
});