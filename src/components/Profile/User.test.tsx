import React from "react";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../Redux/store";
import {Users} from "../Users/Users";
import {HashRouter} from "react-router-dom";

beforeEach(() => {
    render(<Provider store={store}>
        <HashRouter>
        <Users currentPage={7} unfollowTC={()=>{}} users={[{
            name: "User_0000",
            id: "24761",

            photos: {
                small: "",
                large: ""
            },
            status: "",
            followed: false
        },
        {
            name: "Akinin-VV",
            id: "24760",

            photos: {
            small: "",
            large: "null"
        },
            status: "",
            followed: false
        },
        {
            name: "User_000",
            id: "24759",

            photos: {
            small: "",
            large: ""
        },
            status: "",
            followed: false
        },
        {
            name: "zlebnik",
            id: "24758",
            photos: {
            small: "",
            large: "",
        },
            status: "",
            followed: false
        },
        {
            name: "r203mail",
            id: "24757",

            photos: {
            small: "",
            large: ""
        },
            status: "",
            followed: false
        }]} totalUserCount={19769} pageSize={7} followTC={()=>{}} onPageChanged={()=>{}} followingInProgress={store.getState().UsersPage.following}/>
        </HashRouter>
    </Provider>
    );
})

describe('Pagination component', () => {

    test('Pagination component exists', () => {
        const pagination = screen.getByTestId("pagination");
        expect(pagination).toBeInTheDocument();
    });
});