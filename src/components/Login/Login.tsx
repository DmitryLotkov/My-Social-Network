import React from 'react';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../Redux/Login-reducer";
import {Navigate, useNavigate} from "react-router-dom";
import {AppRootState} from "../../Redux/reduxStore";
import {checkAuthType} from "../../Redux/AuthReducer";


export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: "Email is required"

                }
            }
            if (!values.password) {
                return {
                    password: "Password is required"
                }
            }
        },
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        onSubmit: values => {
            dispatch(loginTC(values));
            navigate('/profile/21748')
        }
    })
    const isAuth = useSelector<AppRootState,checkAuthType>(state => state.Auth.isAuth);
    if (isAuth === "logged"){
        return <Navigate to={"/profile"}/>
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
                {formik.errors.email ? <div style={ {color:"red"}}>{formik.errors.email}</div> : null}
                <div>
                    <input type={"password"}
                           placeholder={"Password"}
                           {...formik.getFieldProps("password")}/>
                </div>
                {formik.errors.password ? <div style={ {color:"red"}}>{formik.errors.password}</div> : null}
                <div>
                    <label>
                        <input type={"checkbox"}
                               {...formik.getFieldProps("rememberMe")}
                               checked={formik.values.rememberMe}/> Remember me</label>
                </div>
                <div>
                    <button type={"submit"}>Login</button>
                </div>
            </form>
        </div>
    );
};

