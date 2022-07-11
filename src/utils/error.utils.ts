import {AxiosError} from "axios";
import {AppThunkDispatch} from "../Redux/store";
import {setAppErrorAC, setAppStatusAC} from "../Redux/AppReducer";

export const handleNetworkError = (Error: AxiosError<{ error: string }>, dispatch: AppThunkDispatch) =>{

    dispatch(setAppStatusAC("failed"));
    dispatch(setAppErrorAC(Error.response?.data.error || "some Error"));
}