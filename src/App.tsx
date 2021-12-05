import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Events} from "./components/Events/Events";
import {Photos} from "./components/Photos/Photos";
import {AppStoreType} from "./Redux/reduxStore";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";


type PropsType = {
    store: AppStoreType
}
const App = (props: PropsType) => {

    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar SideBar={state.SideBar}/>
                <div className={"App-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={<Profile store={props.store}
                        />
                        }/>
                        <Route path={"/dialogs"} element={<DialogsContainer store={props.store}/>
                        }/>
                        <Route path={"/events"} element={<Events/>}/>
                        <Route path={"/photos"} element={<Photos/>}/>

                    </Routes>


                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
