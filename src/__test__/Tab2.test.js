import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Tab2 from '../components/Tab2';


it("renders Tab2 without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <BrowserRouter>
            <Tab2 />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
})
