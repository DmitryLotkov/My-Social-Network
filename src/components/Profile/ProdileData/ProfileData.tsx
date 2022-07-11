import React from 'react';
import {useAppSelector} from "../../../Redux/store";
import {profileSelector} from "../../Common/Selectors/Selectors";

import {Contact} from "./Contact";

export const ProfileData = () => {
    const profile = useAppSelector(profileSelector);

    return (
        <div>
            <strong>Contacts: {Object.keys(profile.contacts).map(contactKey =>
                    //@ts-ignore
                <Contact contactTitle={contactKey} contactValue={profile.contacts[contactKey]} key={contactKey}/>)}</strong>
        </div>
    );
};

