import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Events} from "./components/Events/Events";
import {Photos} from "./components/Photos/Photos";
import {state} from "./Redux/state"


function App() {

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar SideBar={state.SideBar}/>
                <div className={"App-wrapper-content"}>
                    <Route path="/profile" render={() => <Profile ProfilePage={state.ProfilePage}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs DialogPage={state.DialogPage}/>}/>
                    <Route path={"/events"} render={() => <Events/>}/>
                    <Route path={"/photos"} render={() => <Photos/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
