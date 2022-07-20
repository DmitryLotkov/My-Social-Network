import React from "react";
import {useFormik} from "formik";
import styles from "./TextAreaForm.module.scss";
import {MyPostsPropsType} from "../../Profile/MyPosts";
import {maxMessageLength} from "./textAreaData";
import Button from "@mui/material/Button";
import TelegramIcon from '@mui/icons-material/Telegram';
import {TextField} from "@mui/material";



export const TextAreaForm = React.memo((props: MyPostsPropsType) => {
    type FormikErrorType = {
        text?: string
    }
    const formik = useFormik({
        initialValues: {
            text: "",
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if(!values.text){
                errors.text = "Enter a message"
            }
            if(values.text.length >= maxMessageLength){
                errors.text = `Max length of message is ${maxMessageLength} symbols.`
            }
            return errors;
        },

        onSubmit: (values, {resetForm}) => {
            if (values.text !== "")
                props.callBack(values.text)
            resetForm();
        },

    })


    return (
        <form  onSubmit={formik.handleSubmit}>
            <div className={styles.formWrapper}>
                <TextField  multiline={true} className={styles.textArea}
                         placeholder={props.placeholderText}
                         {...formik.getFieldProps("text")} onBlur={() => formik.errors.text = ""}
            />
                <div>
                    <Button style={{backgroundColor: "#0077B5"}} variant={"contained"} type={"submit"}><TelegramIcon/></Button>
                </div>
            </div>
            {formik.errors.text &&  <div style={{color: "red"}}> {formik.errors.text}</div>}
        </form>
    )

})