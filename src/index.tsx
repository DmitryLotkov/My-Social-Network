import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

const dialogs = [
    {id: v1(), name: "Dmitry Lomonosov"},
    {id: v1(), name: "Sarah Konor"},
    {id: v1(), name: "Anton Dovgalo"},
    {id: v1(), name: "Maya Vishnevskaya"},
];

const messages = [
    {id: v1(), message: "What is the weather forecast for tomorrow?"},
    {id: v1(), message: "It seems to bee good)"},
    {id: v1(), message: "Do you know Sarah?"},
    {id: v1(), message: "How are you?"},
    {id: v1(), message: "What are you waiting for?"},
];

const postsData = [
    {id: v1(), message: "How are you?", likesCount: 11},
    {id: v1(), message: "What is your name?", likesCount: 16},
    {id: v1(), message: "What are you waiting for?", likesCount: 11},
];
ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs}
         messages={messages}
         postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
