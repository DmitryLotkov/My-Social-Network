import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/AuthReducer";
import {AppRootStateType} from "../../Redux/reduxStore";
import {Navigate} from "react-router-dom";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
export const Login = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.Auth.isLoggedIn);
    const dispatch = useDispatch();
    const formik = useFormik({
        validate: (values) => {
            const errors: FormikErrorType = {};
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
        },
        onSubmit: values => {
            dispatch(loginTC(values));
            formik.resetForm();
        }
    })
    if(isLoggedIn){
        return <Navigate to={"/"}/>
    }
    return (

        <div>
            <h1>Login</h1>
            <div>
                <p>
                    To log in get registered <a href={"https://social-network.samuraijs.com/signUp"}>here</a>
                </p>
                <p>
                    or use common test accounts credentials:
                </p>
                <p>
                    Email: free@samuraijs.com
                </p>
                <p>
                    Password: free
                </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input placeholder={"email"}
                           {...formik.getFieldProps("email")}/>
                </div>
                {formik.touched.password &&formik.errors.email ? <div style={ {color:"red"}}>{formik.errors.email}</div> : null}
                <div>
                    <input type={"password"}
                           placeholder={"Password"}
                           {...formik.getFieldProps("password")}/>
                </div>
                {formik.touched.password &&formik.errors.password ? <div style={ {color:"red"}}>{formik.errors.password}</div> : null}
                <div>
                    <label>
                        <input type={"checkbox"}
                               {...formik.getFieldProps("rememberMe")}
                               checked={formik.values.rememberMe}/>
                               Remember me
                    </label>
                </div>
                <div>
                    <button type={"submit"}>Login</button>
                </div>
            </form>
        </div>
    );
};

