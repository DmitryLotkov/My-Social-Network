import React, {FC, useEffect} from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {SideBar} from "./components/Navbar/SideBar";
import {Route, Routes, Navigate} from "react-router-dom";
import {store, useAppSelector} from "./Redux/reduxStore";
import UsersContainerFC from './components/Users/UsersContainerFC';
import {ProfileContainerFC} from "./components/Profile/ProfileContainerFC";
import {EventsContainer} from "./components/Events/EventsContainer";
import PhotosContainer from "./components/Photos/PhotosContainer";
import {useDispatch} from "react-redux";
import {initializeAppTC} from "./Redux/AuthReducer";
import {Login} from "./components/Login/Login";
import {Preloader} from "./components/Common/Preloader/Preloader";
import {isInitializedSelector, isLoggedInSelector, userIDSelector} from "./components/Common/Selectors/Selectors";
import withSuspense from "./components/HOC/withSuspense";


const DialogContainerFC = React.lazy(()=> import("./components/Dialogs/DialogContainerFC"));

export const PATH = {
    HOME: "/",
    LOGIN: "/login",
    PROFILE: "/profile",
    USERS: "/users",
    ERROR404: "/404",
    ANY_ROUTE:"*",
    DIALOGS: "/dialogs",
    EVENTS:"/events",
    PHOTOS:"/photos"
}



const App: FC = () => {

    const state = store.getState();
    const dispatch = useDispatch();
    const userID = useAppSelector(userIDSelector)
    const isLoggedIn = useAppSelector(isLoggedInSelector);
    const isInitialized = useAppSelector(isInitializedSelector);

    useEffect(() => {
        dispatch(initializeAppTC());
    }, [dispatch]);

    if (!isInitialized) {
        return <Preloader/>
    }



    return (
        <div className={"App"}>
            <Header/>
            <main className={"mainContent"}>
            {isLoggedIn && <SideBar SideBar={state.SideBar}/>}
                 <Routes>
                    <Route path={PATH.HOME} element={<Navigate to={`${PATH.PROFILE}/${userID}`}/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                    <Route path={`${PATH.PROFILE}/:userId`} element={withSuspense(ProfileContainerFC)({})}/>
                    <Route path={PATH.DIALOGS} element={withSuspense(DialogContainerFC)({})}/>
                    <Route path={PATH.EVENTS} element={<EventsContainer/>}/>
                    <Route path={PATH.PHOTOS} element={<PhotosContainer/>}/>
                    <Route path={PATH.USERS} element={<UsersContainerFC/>}/>
                    <Route path={PATH.ANY_ROUTE} element={<Navigate to={PATH.ERROR404}/>} />
                    <Route path={PATH.ERROR404} element={<div>Error 404</div>} />
                </Routes>
                
            </main>
        </div>
    );
}

export default App;
