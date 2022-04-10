import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";
import {AppRootState, store} from "./Redux/reduxStore";
import UsersContainerFC from './components/Users/UsersContainerFC';
import {ProfileContainerFC} from "./components/Profile/ProfileContainerFC";
import {Login} from "./Login";
import DialogContainerFC from "./components/Dialogs/DialogContainerFC";
import {EventsContainer} from "./components/Events/EventsContainer";
import PhotosContainer from "./components/Photos/PhotosContainer";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./components/Common/Preloader";
import {authThunkCreator} from "./Redux/authReducer";

const App = React.memo(() => {
    const fetching = useSelector<AppRootState, boolean>(state => state.auth.isFetching);
    const state = store.getState();
    const dispatch = useDispatch<any>();


        useEffect(() => {
            dispatch(authThunkCreator());
        }, [dispatch]);

    return (
        fetching ?
            <Preloader/>
        :
            <>
            <Header/>
            <div className={"mainContent"}>
                <NavBar SideBar={state.SideBar}/>
                <Routes>
                    <Route path={"/"} element={<Navigate to={'/profile/21748'}/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/profile/:userId"} element={<ProfileContainerFC/>}/>
                    <Route path={"/profile"} element={<Navigate to={'/profile/21748'}/>}/>
                    <Route path={"/dialogs"} element={<DialogContainerFC/>}/>
                    <Route path={"/events"} element={<EventsContainer/>}/>
                    <Route path={"/photos"} element={<PhotosContainer/>}/>
                    <Route path={"/users"} element={<UsersContainerFC/>}/>
                    <Route path={"/*"} element={<div>404</div>}/>
                </Routes>
            </div>
        </>
    );
})

export default App;
