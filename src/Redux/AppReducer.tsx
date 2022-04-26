

//types
export enum ACTIONS_TYPE {
    APP_SET_ERROR = "APP-SET-ERROR"

}

export type AuthActionsType = ReturnType<typeof setAppErrorAC>

type InitialStateType = {
    error: string
}

const initialState: InitialStateType = {
    error: ""
}

//reducer
export const appReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {

        case ACTIONS_TYPE.APP_SET_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}
//action creators
export const setAppErrorAC = (error: string) =>
    ({type: ACTIONS_TYPE.APP_SET_ERROR, error} as const);





