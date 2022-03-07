import React from 'react';
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import {Events} from "./Events";

export function EventsContainer(){
    const Redirect = WithAuthRedirect(Events);
    return(
        <div>
            <Redirect/>
        </div>
    );
}