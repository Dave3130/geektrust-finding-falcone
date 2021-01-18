import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Tab3 from '../components/Tab3';

it("renders Tab3 without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Tab3 />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})