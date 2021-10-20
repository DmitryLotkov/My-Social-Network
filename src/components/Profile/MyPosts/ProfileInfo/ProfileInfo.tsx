import React from "react";
import styles from "./ProfileInfo.module.css"


export function ProfileInfo(){
    return(
            <div className={styles.content}>
                <div >
                    <img src={"https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400"} alt={"surfer"} />
                </div>
                <div className={styles.descriptionBlock }>
                    ava+ description
                </div>

            </div>
    );
}