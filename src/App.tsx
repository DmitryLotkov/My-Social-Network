import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Events} from "./components/Events/Events";
import {Photos} from "./components/Photos/Photos";

type MessagesPropsType = {
    id: string
    message: string
}

type DialogsPropsType = {
    id: string
    name: string
}
type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type IndexPropsType = {
    dialogs?: Array<DialogsPropsType>
    messages?: Array<MessagesPropsType>
    postsData?: Array<PostPropsType>
}

function App(props: IndexPropsType) {
    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar/>
                <div className={"App-wrapper-content"}>
                    <Route path="/profile" render={() => <Profile postsData={props.postsData}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs}
                                                                  messages={props.messages}/>}/>
                    <Route path={"/events"} render={() => <Events/>}/>
                    <Route path={"/photos"} render={() => <Photos/>}/>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
