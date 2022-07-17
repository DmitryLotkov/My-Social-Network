import React, {useEffect} from 'react';
import s from "./EditProfile.module.scss"
import {useAppSelector} from "../../Redux/store";
import {profileSelector} from "../Common/Selectors/Selectors";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Formik} from "formik";
import {getProfileTC, updateProfileTC} from "../../Redux/ProfileReducer";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {PATH} from "../../App";



export const EditProfile = React.memo(() => {
    const userId = useAppSelector(state => state.Auth.data.id);
    const profile = useAppSelector(profileSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProfileTC(userId));
    }, [userId, dispatch]);


    return (
        <div className={s.editProfileWrapper}>
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

                        }}

                        onSubmit={
                            values => {
                                dispatch(updateProfileTC(values));
                                navigate(`${PATH.PROFILE}/${userId}`);
                            }
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
                            <div style={{display: "flex", justifyContent: "center"}}>

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

