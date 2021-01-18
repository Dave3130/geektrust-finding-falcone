import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Tab5 from '../components/Tab5';

it("renders Tab5 without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Tab5 />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})