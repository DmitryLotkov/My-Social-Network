import React from 'react';
import styles from "./Photos.module.scss";

import Photos from "./Photos";


function PhotosContainer() {
    /*const Redirect = WithAuthRedirect(Photos)*/
    return(
        <div className={styles.content}>
            {/*<Redirect/>*/}
            <Photos/>
        </div>
    );
}
/*compose<React.ComponentType>(WithAuthRedirect)(PhotosContainer);*/
export default PhotosContainer