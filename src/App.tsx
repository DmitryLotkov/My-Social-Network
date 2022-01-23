import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Events} from "./components/Events/Events";
import {Photos} from "./components/Photos/Photos";
import {store} from "./Redux/reduxStore";
import {DialogContainer} from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer";




const App = () => {

    const state = store.getState();

    return (
            <div>
                <Header/>
                <div className={"mainContent"}>

                    <NavBar SideBar={state.SideBar}/>
                        <Routes>
                            <Route path={"/profile"} element={<Profile/>}/>
                            <Route path={"/dialogs"} element={<DialogContainer/>}/>
                            <Route path={"/events"} element={<Events/>}/>
                            <Route path={"/photos"} element={<Photos/>}/>
                            <Route path={"/users"} element={<UsersContainer/>}/>
                        </Routes>
                </div>
            </div>
    );
}

export default App;
