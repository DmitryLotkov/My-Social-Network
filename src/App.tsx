import React, {FC, useEffect} from 'react';
import './App.scss';
import {Route, Routes, Navigate} from "react-router-dom";
import {useAppSelector} from "./store/store";
import UsersContainerFC from './components/Users/UsersContainerFC';
import {ProfileContainerFC} from "./components/Profile/ProfileContainerFC";
import {EventsContainer} from "./components/Events/EventsContainer";
import PhotosContainer from "./components/Photos/PhotosContainer";
import {useDispatch} from "react-redux";
import {initializeAppTC} from "./store/AuthReducer";
import {Login} from "./components/Login/Login";
import {Preloader} from "./components/Common/Preloader/Preloader";
import {isInitializedSelector} from "./components/Common/Selectors/Selectors";
import withSuspense from "./components/HOC/withSuspense";
import {RequestStatusType} from "./store/AppReducer";
import {ErrorSnackBar} from "./components/ErrorSnackBar/ErrorSnackBar";
import {EditProfile} from "./components/EditProfile/EditProfile";
import PrivateRoutes from "./components/PrivateRoutes";
import {Error404} from "./components/Error404/Error404";
import {Footer} from "./components/Footer/Footer";




const DialogContainerFC = React.lazy(() => import("./components/Dialogs/DialogContainerFC"));

export const PATH = {
    HOME: "/",
    LOGIN: "/login",
    PROFILE: "/profile",
    USERS: "/users",
    ERROR404: "/404",
    ANY_ROUTE: "*",
    DIALOGS: "/dialogs",
    EVENTS: "/events",
    PHOTOS: "/photos",
    EDIT_PROFILE: "/edit_profile"
}


const App: FC = () => {

    const appStatus = useAppSelector<RequestStatusType>(state => state.App.status);
    const dispatch = useDispatch();
    const isInitialized = useAppSelector(isInitializedSelector);

    useEffect(() => {
        dispatch(initializeAppTC());
    }, [dispatch]);


    if (!isInitialized) {
        return <Preloader/>
    }
    return (
        <div className={"App"}>
            <main className={"mainContent"}>
                {appStatus === 'loading' && <Preloader/>}
                <Routes>
                    <Route path={PATH.HOME} element={<Navigate to={`${PATH.PROFILE}`}/>}/>
                    <Route element={<PrivateRoutes />}>
                        <Route path={`${PATH.PROFILE}`} element={<ProfileContainerFC/>}/>
                        <Route path={`${PATH.PROFILE}/:userId`} element={<ProfileContainerFC/>}/>
                        <Route path={PATH.DIALOGS} element={withSuspense(DialogContainerFC)({})}/>
                        <Route path={PATH.USERS} element={<UsersContainerFC/>}/>
                        <Route path={PATH.EDIT_PROFILE} element={<EditProfile/>}/>
                    </Route>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                    <Route path={PATH.EVENTS} element={<EventsContainer/>}/>
                    <Route path={PATH.PHOTOS} element={<PhotosContainer/>}/>
                    <Route path={PATH.ANY_ROUTE} element={<Navigate to={PATH.ERROR404}/>}/>
                    <Route path={`${PATH.ERROR404}`} element={<Error404/>}/>
                </Routes>
                <ErrorSnackBar/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;


