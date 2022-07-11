import React, {useEffect} from 'react';
import s from "./EditProfile.module.scss"
import {useAppSelector} from "../../Redux/store";
import {profileSelector} from "../Common/Selectors/Selectors";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Formik} from "formik";
import {getProfileTC, updateProfileTC, UserProfileContactType} from "../../Redux/ProfileReducer";
import {useDispatch} from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";


type FormikErrorType = {

    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: UserProfileContactType
}

export const EditProfile = React.memo(() => {
    const userId = useAppSelector(state => state.Auth.data.id)
    const profile = useAppSelector(profileSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileTC(userId));
    }, [userId, dispatch]);



    return (
        <div className={s.wrapper}>
            <div className={s.content}><h3>Edit profile</h3>
                <p>Contacts: </p>
                <Formik enableReinitialize={true}
                        initialValues={{
                            userId: userId,
                            lookingForAJob: profile.lookingForAJob,
                            lookingForAJobDescription: profile.lookingForAJobDescription,
                            fullName: profile.fullName,
                            aboutMe: profile.aboutMe,
                            contacts: {
                                facebook: profile.contacts.facebook,
                                website: profile.contacts.website,
                                vk: profile.contacts.vk,
                                twitter: profile.contacts.twitter,
                                instagram: profile.contacts.instagram,
                                youtube: profile.contacts.youtube,
                                github: profile.contacts.github,
                                mainLink: profile.contacts.mainLink,
                            }

                        }} validate={(values) => {
                    const errors: Partial<FormikErrorType> = {};
                    if (!values.fullName) {
                        errors.fullName = 'User name is required';
                    } else if (/^[a-z0-9_-]{3,16}$/.test(values.fullName)) {
                        errors.fullName = 'Invalid user name format';
                    }
                    if (!values.aboutMe) {
                        errors.aboutMe = "Field is required"
                    }
                    if (errors.contacts && /[-a-zA-Z0-9@:%_+.~#?&=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&=]*)?/gi.test(values.contacts.youtube)) {
                        errors.contacts.youtube = "Invalid URL format";
                    }
                    if (/(?:https:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w]*\/)*([\w]*)/.test(values.contacts.facebook)
                        && errors.contacts) {
                        errors.contacts.facebook = "Invalid URL format";
                    }
                    if (/@([A-Za-z0-9_]{1,15})/.test(values.contacts.twitter)
                        && errors.contacts) {
                        errors.contacts.twitter = "Invalid twitter name format";
                    }
                    if (/(?:https:\/\/)?(?:www\.)?github\.com\/(?:(?:\w)*!\/)/.test(values.contacts.github)
                        && errors.contacts) {
                        errors.contacts.github = "Invalid URL format";
                    }
                    if (/(?:https:\/\/)?[-a-zA-Z0-9@:%_+.~#?&=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&=]*)?/gi.test(values.contacts.vk)
                        && errors.contacts) {
                        errors.contacts.vk = "Invalid URL format";
                    }
                    if (/(?:https:\/\/)?(?:www\.)?vk\.com\?[-a-zA-Z0-9@:%_+.~#?&=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&=]*)?/gi.test(values.contacts.instagram)
                        && errors.contacts) {
                        errors.contacts.instagram = "Invalid URL format";
                    }
                    if (/(?:https:\/\/)?[-a-zA-Z0-9@:%_+.~#?&=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_+.~#?&=]*)?/gi.test(values.contacts.website || values.contacts.mainLink)
                        && errors.contacts) {
                        errors.contacts.website = "Invalid URL format";
                    }

                }}            // @ts-ignore
                        onSubmit={
                            values => dispatch(updateProfileTC(values))
                        }>

                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Github: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.github"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.github}
                                           error={!!props.errors.contacts?.github}
                                           helperText={props.errors.contacts?.github}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Facebook: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.facebook"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.facebook}
                                           error={!!props.errors.contacts?.facebook}
                                           helperText={props.errors.contacts?.facebook}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>VK: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.vk"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.vk}
                                           error={!!props.errors.contacts?.vk}
                                           helperText={props.errors.contacts?.vk}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Instagram: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.instagram"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.instagram}
                                           error={!!props.errors.contacts?.instagram}
                                           helperText={props.errors.contacts?.instagram}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Twitter: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.twitter"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.twitter}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>YouTube: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.youtube"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.youtube}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Your WebSite: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.website"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.website}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Main link: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.mainLink"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.mainLink}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>About me: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           multiline={true}
                                           size={"small"}
                                           type="text"
                                           name={"aboutMe"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.aboutMe}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Full name: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           size={"small"}
                                           type="text"
                                           name={"fullName"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.fullName}
                                />
                            </div>
                            <div style={{display: "flex", justifyContent:"center"}}>

                                <FormControlLabel
                                    labelPlacement={"start"}
                                    className={s.contactText}
                                    label={'Looking for a job:'}
                                    name={"lookingForAJob"}
                                    control={<Checkbox/>}
                                    checked={props.values.lookingForAJob}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Job description: </p>
                                <TextField style={{background: "#FFFFFF", width: "260px"}}
                                           multiline={true}
                                           size={"small"}
                                           name={"lookingForAJobDescription"}
                                           type="text"
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.lookingForAJobDescription}
                                />
                            </div>


                            <div className={s.button}>
                                <Button variant={'contained'} type={"submit"}>Submit
                                changes</Button>
                            </div>
                        </form>
                    )}

                </Formik>
            </div>
        </div>
    );
});

