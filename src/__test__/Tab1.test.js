import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Tab1 from '../components/Tab1';

it("renders Tab1 without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Tab1 />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})