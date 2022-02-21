import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";
import {Events} from "./components/Events/Events";
import {Photos} from "./components/Photos/Photos";
import {store} from "./Redux/reduxStore";
import {DialogContainer} from "./components/Dialogs/DialogsContainer"
import UsersContainerFC from './components/Users/UsersContainerFC';
import {ProfileContainerFC} from "./components/Profile/ProfileContainerFC";




const App = () => {

    const state = store.getState();

    return (
        <div>
            <Header/>
            <div className={"mainContent"}>
                <NavBar SideBar={state.SideBar}/>
                <Routes>
                    <Route path={"/*"} element={<div>404</div>}/>
                    <Route path={"/profile/:userId"} element={<ProfileContainerFC/>}/>
                    <Route path={"/profile"} element={<Navigate to={'/profile/21748'}/>}/>
                    <Route path={"/dialogs"} element={<DialogContainer/>}/>
                    <Route path={"/events"} element={<Events/>}/>
                    <Route path={"/photos"} element={<Photos/>}/>
                    <Route path={"/users"} element={<UsersContainerFC/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
