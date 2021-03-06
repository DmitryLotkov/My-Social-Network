import React from 'react';
import Snackbar from '@mui/material/Snackbar';

import Alert from "@mui/material/Alert";
import {AlertTitle} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {NullableType, setAppErrorAC} from "../../store/AppReducer";



export const ErrorSnackBar = () => {

    const dispatch = useAppDispatch();

    const error = useAppSelector<NullableType<string>>(state => state.App.error);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppErrorAC(null))
    };

    return (
        <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert
                onClose={handleClose} severity="error" sx={{width: '100%'}}>
                <AlertTitle>Error</AlertTitle>
                <strong>{error}</strong>
            </Alert>
        </Snackbar>
    );
};
