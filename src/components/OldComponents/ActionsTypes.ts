import { addMessageAC } from '../../store/DialogsReducer';
import {
  savePhotoAC,
  setStatusAC,
  setUserProfileAC,
  updateNewPostTextAC,
} from '../../store/ProfileReducer';

export type ActionsTypes =
  | ReturnType<typeof updateNewPostTextAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof savePhotoAC>
  | ReturnType<typeof setStatusAC>;
