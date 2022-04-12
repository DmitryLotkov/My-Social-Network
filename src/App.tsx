import React, {FC, useEffect} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Route, Routes, Navigate} from "react-router-dom";
import {AppRootState, store} from "./Redux/reduxStore";
import UsersContainerFC from './components/Users/UsersContainerFC';
import {ProfileContainerFC} from "./components/Profile/ProfileContainerFC";
import DialogContainerFC from "./components/Dialogs/DialogContainerFC";
import {EventsContainer} from "./components/Events/EventsContainer";
import PhotosContainer from "./components/Photos/PhotosContainer";
import {useDispatch, useSelector} from "react-redux";
import {authTC} from "./Redux/AuthReducer";
import {Login} from "./components/Login/Login";


const App:FC = () => {
        const state = store.getState();
        const dispatch = useDispatch<any>();
        const isAuth = useSelector<AppRootState, boolean>(state => state.Auth.isAuth);

        useEffect(() => {
            dispatch(authTC());
        }, [dispatch]);
        /*if(!isAuth){
            return <Navigate to={"/login"}/>
        }*/
        return (
            <>
                <Header/>
                <div className={"mainContent"}>
                    {isAuth && <NavBar SideBar={state.SideBar}/>}
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
    }

export default App;
