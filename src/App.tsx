import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Events} from "./components/Events/Events";
import {Photos} from "./components/Photos/Photos";
import {StoreType} from "./Redux/state"

type PropsType = {
    store: StoreType
}
const App = (props: PropsType) => {

    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={"app-wrapper"}>
                <Header/>
                <NavBar SideBar={state.SideBar}/>
                <div className={"App-wrapper-content"}>
                    <Route path="/profile" render={() => <Profile dispatch={props.store.dispatch.bind(props.store)}
                                                                  postData={state.ProfilePage.postsData}
                                                                  newPostText={state.ProfilePage.NewPostText}
                                                                 />
                    }/>
                    <Route path={"/dialogs"} render={() => <Dialogs DialogPage={state.DialogPage}
                                                                    newMessageText={state.DialogPage.newMessageText}
                                                                    dispatch={props.store.dispatch.bind(props.store)}/>
                    }/>
                    <Route path={"/events"} render={() => <Events/>}/>
                    <Route path={"/photos"} render={() => <Photos/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
