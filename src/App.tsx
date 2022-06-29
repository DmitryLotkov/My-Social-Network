import React, {FC, useEffect} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/Navbar/SideBar";
import {Route, Routes, Navigate} from "react-router-dom";
import {store} from "./Redux/reduxStore";
import UsersContainerFC from './components/Users/UsersContainerFC';
import {ProfileContainerFC} from "./components/Profile/ProfileContainerFC";
import DialogContainerFC from "./components/Dialogs/DialogContainerFC";
import {EventsContainer} from "./components/Events/EventsContainer";
import PhotosContainer from "./components/Photos/PhotosContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "./Redux/AuthReducer";
import {Login} from "./components/Login/Login";
import {Preloader} from "./components/Common/Preloader/Preloader";
import {isInitializedSelector, isLoggedInSelector, userIDSelector} from "./components/Common/Selectors/Selectors";



const App: FC = () => {

    const state = store.getState();
    const dispatch = useDispatch();
    const userID = useSelector(userIDSelector)
    const isLoggedIn = useSelector(isLoggedInSelector);
    const isInitialized = useSelector(isInitializedSelector);

    useEffect(() => {
        dispatch(initializeAppTC());
    }, [dispatch]);

    if (!isInitialized) {
        return <Preloader/>
    }


    return (
        <div className={"App"}>
            <Header/>
            {/*{ isLoggedIn ?*/} <main className={"mainContent"}>
            {isLoggedIn && <SideBar SideBar={state.SideBar}/>}
                 <Routes>
                    <Route path={"/"} element={<Navigate to={`/profile/${userID}`}/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/profile/:userId"} element={<ProfileContainerFC/>}/>
                    {/*<Route path={"/profile"} element={<Navigate to={`/profile/${userID}`}/>}/>*/}
                    <Route path={"/dialogs"} element={<DialogContainerFC/>}/>
                    <Route path={"/events"} element={<EventsContainer/>}/>
                    <Route path={"/photos"} element={<PhotosContainer/>}/>
                    <Route path={"/users"} element={<UsersContainerFC/>}/>
                    <Route path={"/*"} element={<div>404</div>}/>
                </Routes>
                
            </main> {/*:
                <Login/>}*/}
        </div>
    );
}

export default App;
