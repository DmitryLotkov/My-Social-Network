import React from 'react';
import {useAppSelector} from "../../../Redux/store";
import {profileSelector} from "../../Common/Selectors/Selectors";
import style from "./ContactBlock.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faVk} from "@fortawesome/free-brands-svg-icons/faVk";
import {faTwitter} from "@fortawesome/free-brands-svg-icons/faTwitter";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faFirefoxBrowser, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faGoogle} from "@fortawesome/free-brands-svg-icons/faGoogle";

export const ContactBlock = () => {
    const profile = useAppSelector(profileSelector);

    return (
        <div className={style.contactsBlock}>
            <div>
                <strong>Contacts</strong>
            </div>
            {profile.contacts.vk &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faVk}/>
                <a href={profile.contacts.vk}>
                    Vk
                </a>
            </div>}

            {profile.contacts.instagram &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faInstagram}/>
                <a href={profile.contacts.instagram}>
                    Instagram
                </a>
            </div>
            }
            {profile.contacts.youtube &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faYoutube}/>
                <a href={profile.contacts.youtube}>
                    You tube
                </a>
            </div>}

            {profile.contacts.github &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faGithub}/>
                <a href={profile.contacts.github}>
                    GitHub
                </a>
            </div>}

            {profile.contacts.twitter &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faTwitter}/>
                <a href={profile.contacts.twitter}>
                    twitter
                </a>
            </div>
            }
            {profile.contacts.facebook &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faFacebook}/>
                <a href={profile.contacts.twitter}>
                    faceBook
                </a>
            </div>}
            {profile.contacts.website &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faFirefoxBrowser}/>
                <a href={profile.contacts.website}>
                    Web site
                </a>
            </div>}
            {profile.contacts.mainLink &&
            <div className={style.contactsBlockItem}>
                <FontAwesomeIcon className={style.icon} icon={faGoogle}/>
                <a href={profile.contacts.website}>
                    Main link
                </a>
            </div>}
            {profile.lookingForAJobDescription &&
            <>
                <div>
                    <strong>Job description</strong>
                </div>
                <div className={style.contactsBlockItem}>
                    {profile.lookingForAJobDescription}
                </div>
            </>}
        </div>
    );
};

