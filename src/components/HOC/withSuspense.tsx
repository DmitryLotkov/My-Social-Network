import React, {ReactElement} from 'react';
import {Preloader} from "../Common/Preloader/Preloader";


function withSuspense<WCP>(Component: React.ComponentType<WCP>) {

    return (props:WCP):ReactElement => (
        <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    )
}
export default withSuspense
