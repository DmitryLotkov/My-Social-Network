import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/AuthReducer";
import {AppRootStateType} from "../../Redux/reduxStore";
import {Navigate} from "react-router-dom";
import {setAppErrorAC} from "../../Redux/AppReducer";
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";

type FormikErrorType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
export const Login = React.memo(() => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.Auth.isLoggedIn);
    const serverError = useSelector<AppRootStateType, string>(state => state.App.error);
    const dispatch = useDispatch();

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
            rememberMe: false,
        },

        onSubmit: values => {
            dispatch(loginTC(values));
        }
    })
    if (isLoggedIn) {
        return <Navigate to={"/"}/>
    }

    const removeError = () => {
        serverError && dispatch(setAppErrorAC(""));
    }

    return (

        <Grid container justifyContent={"center"}>
            <Grid item justifyContent={'center'}>
                <h1>Login</h1>
                <FormControl>
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
                        <FormGroup>
                            <TextField label="Email"
                                       placeholder={"email"}
                                       type="email"
                                       margin="normal"
                                       {...formik.getFieldProps("email")} onFocus={removeError}/>

                            {formik.touched.password && formik.errors.email ?
                                <div style={{color: "red"}}>{formik.errors.email}</div> : null}

                            <TextField type={"password"}
                                       label="Password"
                                       margin="normal"
                                       placeholder={"Password"}
                                       {...formik.getFieldProps("password")}
                                       onFocus={removeError}/>

                            {formik.touched.password && formik.errors.password ?
                                <div style={{color: "red"}}>{formik.errors.password}</div> : null}


                            <FormControlLabel
                                label={'Remember me'}
                                control={<Checkbox/>}
                                {...formik.getFieldProps("rememberMe")}
                                checked={formik.getFieldProps("rememberMe").value}
                            />


                            {serverError && <div style={{color: "red"}}>{serverError}</div>}


                            <Button variant={'contained'}
                                    type={"submit"}>
                                Login
                            </Button>
                        </FormGroup>
                    </form>
                </FormControl>
            </Grid>
        </Grid>
    );
});

