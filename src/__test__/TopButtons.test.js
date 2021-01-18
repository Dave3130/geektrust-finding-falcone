import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Button from '../components/TopButtons';

it("renders Top Buttons without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Button url="/" />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})