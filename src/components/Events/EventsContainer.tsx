import React from 'react';

import {Events} from "./Events";

export function EventsContainer(){
   /* const Redirect = WithAuthRedirect(Events);*/
    return(
        <div>
            {/*<Redirect/>*/}
            <Events/>
        </div>
    );
}