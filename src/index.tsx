import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {RootStateType, store} from "./Redux/state";


export let rerenderEntireTree = (state:RootStateType)=> {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);