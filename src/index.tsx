import './index.scss';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {store} from "./store/store";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

// @ts-ignore
window.store = store

    ReactDOM.render(
            <Provider store={store}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </Provider>,
        document.getElementById('root')
    );

