import React from 'react';
import styles from "./Photos.module.scss";
import {WithAuthRedirect} from "../HOC/withAuthRedirect";
import Photos from "./Photos";


function PhotosContainer() {
    const Redirect = WithAuthRedirect(Photos)
    return(
        <div className={styles.content}>
            <Redirect/>
        </div>
    );
}
/*compose<React.ComponentType>(WithAuthRedirect)(PhotosContainer);*/
export default PhotosContainer