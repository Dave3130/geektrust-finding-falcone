import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Tab4 from '../components/Tab4';

it("renders Tab4 without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Tab4 />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})