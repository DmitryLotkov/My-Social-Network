import React, {useEffect, useState} from 'react';
import {useFormik} from "formik";
import {useDispatch, } from "react-redux";
import {loginTC} from "../../store/AuthReducer";
import {useAppSelector} from "../../store/store";
import {Navigate} from "react-router-dom";
import {NullableType, setAppErrorAC} from "../../store/AppReducer";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import {PATH} from "../../App";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {InputAdornment} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import styles from "./login.module.scss";

type FormikErrorType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
export const Login = React.memo(() => {
    const isLoggedIn = useAppSelector<boolean>(state => state.Auth.isLoggedIn);
    const serverError = useAppSelector<NullableType<string>>(state => state.App.error);
    const captchaUrl = useAppSelector<NullableType<string>>(state => state.Auth.captchaUrl)
    const dispatch = useDispatch();
    const [isPassType, setIsPassType] = useState<boolean>(true);

    const formik = useFormik({
        validate: (values) => {
            const errors: Partial<FormikErrorType> = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.password.length < 3) {
                errors.password = "Invalid password length"
            }
            if (!values.password) {
                errors.password = "Password required"
            }

            return errors;
        },
        initialValues: {
            email: "",
            password: "",
            rememberMe: true,
            captcha: ""
        },

        onSubmit: values => {
            dispatch(loginTC(values));
        }
    })


    const removeError = () => {
        serverError && dispatch(setAppErrorAC(""));
    }
    const handleClickShowPassword = () => {
        setIsPassType(!isPassType);
    };
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                formik.handleSubmit()
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [formik]);

    if (isLoggedIn) {
        return <Navigate to={PATH.HOME}/>
    }
    return (

        <Grid className={styles.loginWrapper} container justifyContent={"center"}>
            <Grid className={styles.login} item justifyContent={'center'}>
                <h2 className={styles.h2}>
                    Social network
                </h2>
                <h2 >
                    Sign in
                </h2>
                <FormControl className={styles.textFields}>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               rel="noreferrer" target={'_blank'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup >
                            <FormControl  sx={{mTop: 2, width: '30ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                                <Input {...formik.getFieldProps("email")} onFocus={removeError}
                                />
                            </FormControl>
                            {formik.touched.email && formik.errors.email ?
                                <div className={styles.emailError}>{formik.errors.email}</div> : null}

                            <FormControl sx={{mTop: 2, width: '30ch'}} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input {...formik.getFieldProps("password")}
                                       id="standard-adornment-password"
                                       type={isPassType ? 'password' : 'text'}
                                       endAdornment={
                                           <InputAdornment position="end">
                                               <IconButton
                                                   aria-label="toggle password visibility"
                                                   onClick={handleClickShowPassword}
                                                   onMouseDown={handleMouseDownPassword}
                                               >
                                                   {isPassType ? <VisibilityOff/> : <Visibility/>}
                                               </IconButton>
                                           </InputAdornment>
                                       }
                                />
                                {formik.touched.password && formik.errors.password ?
                                    <div className={styles.passError}>{formik.errors.password}</div> : null}
                            </FormControl>

                            <FormControlLabel className={styles.checkbox}
                                label={'Remember me'}
                                control={<Checkbox/>}
                                {...formik.getFieldProps("rememberMe")}
                                checked={formik.getFieldProps("rememberMe").value}
                            />

                            {captchaUrl &&
                            <>
                                <img src={captchaUrl} alt={"captchaImg"}/>
                                <FormControl sx={{mTop: 2, width: '30ch'}} variant="standard">
                                    <InputLabel htmlFor="standard-adornment-password">Captcha</InputLabel>
                                    <Input {...formik.getFieldProps("captcha")}

                                    />
                                    {formik.touched.captcha && formik.errors.captcha ?
                                        <div style={{color: "red"}}>{formik.errors.captcha}</div> : null}
                                </FormControl>
                            </>
                            }

                            <div className={styles.button}>
                                <Button style={{marginTop: " 1rem", marginBottom: "1rem", width: "200px"}}
                                       variant={'contained'}
                                       type={"submit"}>
                                Login
                            </Button>
                            </div>
                        </FormGroup>
                    </form>
                </FormControl>
            </Grid>
        </Grid>
    );
});

