import React from "react";
import {useFormik} from "formik";
import styles from "./TextAreaForm.module.scss";
import {MyPostsPropsType} from "../../Profile/MyPosts";
import {maxMessageLength} from "./textAreaData";
import Button from "@mui/material/Button";



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
            <div className={styles.formWrapper}><textarea className={styles.textArea} maxLength={1000}
                         placeholder={props.placeholderText}
                         {...formik.getFieldProps("text")}
                         autoFocus={true} onBlur={() => formik.errors.text = undefined}
            />
                <div>
                    <Button type={"submit"}>Publish</Button>
                </div>
            </div>
            {formik.errors.text &&  <div style={{color: "red"}}> {formik.errors.text}</div>}
        </form>
    )

})