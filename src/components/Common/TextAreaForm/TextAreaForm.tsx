import React from 'react';

import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';

import { MyPostsPropsType } from '../../../Pages/Profile/MyPosts';

import { maxMessageLength } from './textAreaData';
import styles from './TextAreaForm.module.scss';

type TexAreaPostType = MyPostsPropsType & {
  webSocketStatusDisabled?: boolean;
};

export const TextAreaForm = React.memo((props: TexAreaPostType) => {
  type FormikErrorType = {
    text?: string;
  };
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validate: values => {
      const errors: FormikErrorType = {};
      if (values.text.length >= maxMessageLength) {
        errors.text = `Max length of message is ${maxMessageLength} symbols.`;
      }
      return errors;
    },

    onSubmit: (values, { resetForm }) => {
      if (values.text !== '') props.callBack(values.text);
      resetForm();
    },
  });
  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!props?.webSocketStatusDisabled && e.key === 'Enter' && e.ctrlKey) {
      formik.handleSubmit();
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.formWrapper}>
        <TextField
          multiline
          className={styles.textArea}
          placeholder={props.placeholderText}
          {...formik.getFieldProps('text')}
          onBlur={() => (formik.errors.text = '')}
          onKeyUp={onKeyUpHandler}
        />
        <>
          {formik.values.text && (
            <IconButton
              className={styles.iconButton}
              type="submit"
              disabled={props?.webSocketStatusDisabled}
            >
              <SendIcon />
            </IconButton>
          )}
        </>
      </div>
      {formik.errors.text && <div style={{ color: 'red' }}> {formik.errors.text}</div>}
    </form>
  );
});
