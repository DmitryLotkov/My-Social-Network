import React, {FC, useEffect} from 'react';
import './App.scss';
import {Route, Routes, Navigate} from "react-router-dom";
import {useAppSelector} from "./store/store";
import UsersContainerFC from './Pages/Users/UsersContainerFC';
import PhotosContainer from "./Pages/Photos/PhotosContainer";
import {useDispatch} from "react-redux";
import {initializeAppTC} from "./store/AuthReducer";
import {Preloader} from "./components/Common/Preloader/Preloader";
import {isInitializedSelector} from "./components/Common/Selectors/Selectors";
import withSuspense from "./components/HOC/withSuspense";
import {RequestStatusType} from "./store/AppReducer";
import {ErrorSnackBar} from "./components/ErrorSnackBar/ErrorSnackBar";
import PrivateRoutes from "./components/PrivateRoutes";
import {Error404} from "./Pages/Error404/Error404";
import {Login} from "./Pages/Login/Login";
import {Footer} from "./Pages/Footer/Footer";
import {EditProfile} from "./Pages/EditProfile/EditProfile";
import {EventsContainer} from "./Pages/Events/EventsContainer";
import {ProfileContainerFC} from "./Pages/Profile/ProfileContainerFC";


const SuspendedDialogContainer = React.lazy(() => import("./Pages/Dialogs/DialogContainerFC"));

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
                        <Route path={PATH.DIALOGS} element={withSuspense(SuspendedDialogContainer)({})}/>
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


