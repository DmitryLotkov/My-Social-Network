import React, {FC, useEffect} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";
import {AppRootStateType, store} from "./Redux/reduxStore";
import UsersContainerFC from './components/Users/UsersContainerFC';
import {ProfileContainerFC} from "./components/Profile/ProfileContainerFC";
import DialogContainerFC from "./components/Dialogs/DialogContainerFC";
import {EventsContainer} from "./components/Events/EventsContainer";
import PhotosContainer from "./components/Photos/PhotosContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "./Redux/AuthReducer";
import {Login} from "./components/Login/Login";

import {Preloader} from "./components/Common/Preloader/Preloader";



const App: FC = () => {

    const state = store.getState();
    const dispatch = useDispatch();
    const userID = useSelector<AppRootStateType, number>(state => state.ProfilePage.profile.userId)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.Auth.isLoggedIn);
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.Auth.isInitialized);

    useEffect(() => {
        dispatch(initializeAppTC());
    }, [dispatch]);

    if (!isInitialized) {
        return <Preloader/>
    }
    return (
        <div className={"App"}>
            <Header/>
            {isLoggedIn ? <div className={"mainContent"}>
                <NavBar SideBar={state.SideBar}/>
                 <Routes>
                    <Route path={"/"} element={<Navigate to={`/profile/${userID}`}/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/profile/:userId"} element={<ProfileContainerFC/>}/>
                    <Route path={"/profile"} element={<Navigate to={`/profile/${userID}`}/>}/>
                    <Route path={"/dialogs"} element={<DialogContainerFC/>}/>
                    <Route path={"/events"} element={<EventsContainer/>}/>
                    <Route path={"/photos"} element={<PhotosContainer/>}/>
                    <Route path={"/users"} element={<UsersContainerFC/>}/>
                    <Route path={"/*"} element={<div>404</div>}/>
                </Routes>
            </div> :<Login/>}
        </div>
    );
}

export default App;
