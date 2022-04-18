import React from "react";
import {useFormik} from "formik";
import styles from "./TextAreaForm.module.scss";
import {MyPostsPropsType} from "../../Profile/MyPosts";

export const TextAreaForm = React.memo((props: MyPostsPropsType) => {

    const formik = useFormik({
        initialValues: {
            text: "",
        },
        onSubmit: (values, {resetForm}) => {
            if (values.text !== "")
                props.callBack(values.text)
            resetForm();
        },

    })

    return (
        <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
                <textarea  className={styles.textArea} maxLength={1000}
                          placeholder={props.placeholderText}
                          {...formik.getFieldProps("text")}
                          autoFocus={true}
                />
            <div>
                <button type={"submit"}>Publish</button>
            </div>
        </form>
    )

})