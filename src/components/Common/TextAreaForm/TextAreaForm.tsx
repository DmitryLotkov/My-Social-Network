import React from "react";
import {useFormik} from "formik";
import styles from "./TextAreaForm.module.scss";
import {MyPostsPropsType} from "../../Profile/MyPosts";
import {maxMessageLength} from "./textAreaData";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

type TexAreaPostType = MyPostsPropsType & {
    webSocketStatus?: boolean
}


export const TextAreaForm = React.memo((props: TexAreaPostType) => {
    type FormikErrorType = {
        text?: string
    }
    const formik = useFormik({
        initialValues: {
            text: "",
        },
        validate: values => {
            const errors: FormikErrorType = {};
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
                    <Button variant={"outlined"} type={"submit"} disabled={props.webSocketStatus}>
                        <SendIcon/>
                    </Button>
                </div>
            </div>
            {formik.errors.text &&  <div style={{color: "red"}}> {formik.errors.text}</div>}
        </form>
    )

})