import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./Redux/reduxStore";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

// @ts-ignore
window.store = store

    ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Provider>,
        document.getElementById('root')
    );

