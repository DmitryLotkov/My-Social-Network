import React from "react";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../Redux/reduxStore";
import {ProfileStatus} from "./ProfileStatus";

beforeEach(() => {
    render(<Provider store={store}>
        <ProfileStatus/>
    </Provider>);
})

describe('Profile status component', () => {

    test('<span> with status exists', () => {
        const div = screen.getByTestId("editableDiv");
        expect(div).toBeInTheDocument();
    });

});