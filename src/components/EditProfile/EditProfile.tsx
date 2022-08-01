import React from 'react';
import s from "./EditProfile.module.scss"
import {useAppSelector} from "../../store/store";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {Formik} from "formik";
import {updateProfileTC} from "../../store/ProfileReducer";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {PATH} from "../../App";



export const EditProfile = React.memo(() => {
    const userId = useAppSelector(state => state.Auth.data.id);
    const myProfile = useAppSelector(state => state.Auth.myProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={s.editProfileWrapper}>
            <div className={s.content}><h3>Edit profile</h3>

                <Formik enableReinitialize={true}
                        initialValues={{
                            userId: userId,
                            lookingForAJob: myProfile && myProfile.lookingForAJob,
                            lookingForAJobDescription: myProfile &&  myProfile.lookingForAJobDescription,
                            fullName: myProfile &&  myProfile.fullName,
                            aboutMe: myProfile &&  myProfile.aboutMe,
                            contacts: {
                                facebook: myProfile &&  myProfile.contacts.facebook,
                                website: myProfile &&  myProfile.contacts.website,
                                vk: myProfile &&  myProfile.contacts.vk,
                                twitter: myProfile &&  myProfile.contacts.twitter,
                                instagram: myProfile &&  myProfile.contacts.instagram,
                                youtube: myProfile &&  myProfile.contacts.youtube,
                                github: myProfile &&  myProfile.contacts.github,
                                mainLink: myProfile &&  myProfile.contacts.mainLink,
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
                                <div className={s.contactText}>Github: </div>
                                <TextField inputProps={{ className: s.textField }}
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
                                <div className={s.contactText}>Facebook: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.facebook"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.facebook}

                                />
                            </div>
                            <div className={s.formRow}>
                                <div className={s.contactText}>VK: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.vk"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.vk}

                                />
                            </div>
                            <div className={s.formRow}>
                                <div className={s.contactText}>Instagram: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.instagram"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.instagram}


                                />
                            </div>
                            <div className={s.formRow}>
                                <div className={s.contactText}>Twitter: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.twitter"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.contacts.twitter}

                                />
                            </div>
                            <div className={s.formRow}>
                                <div className={s.contactText}>YouTube: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.youtube"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}

                                />
                            </div>
                            <div className={s.formRow}>
                                <div className={s.contactText}>WebSite: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.website"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}

                                />
                            </div>
                            <div className={s.formRow}>
                                <div className={s.contactText}>Main link: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"contacts.mainLink"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}

                                />
                            </div>
                            <div className={s.formRow}>
                                <div className={s.contactText}>About me: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           multiline={true}
                                           size={"small"}
                                           type="text"
                                           name={"aboutMe"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.aboutMe}

                                />

                            </div>
                            <div className={s.formRowWithoutMargin}>
                                <div className={s.contactText}>Full name: </div>
                                <TextField inputProps={{ className: s.textField }}
                                           size={"small"}
                                           type="text"
                                           name={"fullName"}
                                           onChange={props.handleChange}
                                           onBlur={props.handleBlur}
                                           value={props.values.fullName}

                                />
                            </div>
                            <div  className={s.formRowWithoutMargin}>

                                <FormControlLabel
                                    labelPlacement={"start"}

                                    label={'Looking for a job:'}
                                    name={"lookingForAJob"}
                                    control={<Checkbox/>}
                                    checked={props.values.lookingForAJob}
                                    onChange={props.handleChange}
                                />
                            </div>
                            <div className={s.formRow}>
                                <p className={s.contactText}>Job description: </p>
                                <TextField inputProps={{ className: s.textField }}
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

