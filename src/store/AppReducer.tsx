// types
export type NullableType<T> = null | T;
export enum ACTIONS_TYPE {
  APP_SET_ERROR = 'APP-SET-ERROR',
  APP_SET_STATUS = 'APP/SET-STATUS',
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type AppActionsType =
  | ReturnType<typeof setAppErrorAC>
  | ReturnType<typeof setAppStatusAC>;

type InitialStateType = typeof initialState;
const initialState = {
  error: null as NullableType<string>,
  status: 'idle' as RequestStatusType,
};

// reducer
export const appReducer = (
  state: InitialStateType = initialState,
  action: AppActionsType,
): InitialStateType => {
  switch (action.type) {
    case ACTIONS_TYPE.APP_SET_ERROR:
      return { ...state, error: action.error };
    case ACTIONS_TYPE.APP_SET_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};
// action creators
export const setAppErrorAC = (error: NullableType<string>) =>
  ({ type: ACTIONS_TYPE.APP_SET_ERROR, error } as const);
export const setAppStatusAC = (status: RequestStatusType) =>
  ({ type: ACTIONS_TYPE.APP_SET_STATUS, status } as const);
