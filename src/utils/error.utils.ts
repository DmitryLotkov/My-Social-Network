import {AxiosError} from "axios";
import {AppThunkDispatch} from "../Redux/store";
import {setAppErrorAC, setAppStatusAC} from "../Redux/AppReducer";
import {RespType} from "../components/api";


export const handleNetworkError = (Error: AxiosError<{ error: string }>, dispatch: AppThunkDispatch) =>{

    dispatch(setAppStatusAC("failed"));
    dispatch(setAppErrorAC(Error.response?.data.error || "some Error"));
}


export const handleServerAppError = <D>(data: RespType<D>, dispatch: AppThunkDispatch, ) =>{
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]));
    } else {
        dispatch(setAppErrorAC("Some error occupied"));
    }
    dispatch(setAppStatusAC("failed"));

}
export const handleServerNetworkError = (error:Error, dispatch:AppThunkDispatch) =>{
    dispatch(setAppErrorAC(error.message));
    dispatch(setAppStatusAC("failed"));

}
