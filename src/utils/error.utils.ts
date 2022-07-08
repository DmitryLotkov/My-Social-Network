import {AxiosError} from "axios";
import {AppThunkDispatch} from "../Redux/store";
import {setAppErrorAC, setAppStatusAC} from "../Redux/AppReducer";

export const handleNetworkError = (error: AxiosError<{ error: string }>, dispatch: AppThunkDispatch) =>{
    dispatch(setAppStatusAC("failed"));
    dispatch(setAppErrorAC(error.response?.data.error || "some Error"));
}