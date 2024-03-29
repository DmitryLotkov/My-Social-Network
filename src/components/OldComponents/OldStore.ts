import { v1 } from 'uuid';

import { DialogsStateType } from '../../store/DialogsReducer';

import { ActionsTypes } from './ActionsTypes';

export type StoreType = {
  _state: RootStateType;
  callSubscriber: (_state: RootStateType) => void;
  subscribe: (observer: (_state: RootStateType) => void) => void;
  getState: () => RootStateType;
  dispatch: (action: ActionsTypes) => void;
};
export type MessagesType = {
  id: string;
  message: string;
};
export type DialogsType = {
  id: string;
  name: string;
  avatar: string;
};
export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};
export type OnlineFriendType = {
  id: string;
  avatar: string;
};
export type SideBarType = {
  onlineFriends: Array<OnlineFriendType>;
};
export type ProfilePageTypeOld = {
  postsData: Array<PostType>;
  NewPostText: string;
};

export type RootStateType = {
  DialogPage: DialogsStateType;
  ProfilePage: ProfilePageTypeOld;
  SideBar: SideBarType;
};
export const oldStore: StoreType = {
  _state: {
    DialogPage: {
      dialogs: [
        {
          id: v1(),
          name: 'Dmitry Lomonosov',
          avatar: 'https://themified.com/friend-finder/images/users/user-4.jpg',
          message: 'la-la',
        },
        /* {id: v1(), name: "Sarah Konor", avatar: "https://themified.com/friend-finder/images/users/user-3.jpg"},
                 {
                     id: v1(),
                     name: "Anton Dovgalo",
                     avatar: "https://themified.com/friend-finder/images/users/user-6.jpg"
                 },
                 {
                     id: v1(),
                     name: "Maya Vishnevskaya",
                     avatar: "https://themified.com/friend-finder/images/users/user-2.jpg"
                 }, */
      ],
      messages: [
        { id: v1(), message: 'What is the weather forecast for tomorrow?' },
        { id: v1(), message: 'It seems to bee good)' },
        { id: v1(), message: 'Do you know Sarah?' },
        { id: v1(), message: 'How are you?' },
        { id: v1(), message: 'What are you waiting for?' },
      ],
    },
    ProfilePage: {
      NewPostText: '',
      postsData: [
        { id: v1(), message: 'How are you?', likesCount: 11 },
        { id: v1(), message: 'What is your name?', likesCount: 16 },
        { id: v1(), message: 'What are you waiting for?', likesCount: 11 },
      ],
    },
    SideBar: {
      onlineFriends: [
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-4.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-3.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-6.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-2.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-7.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-10.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-9.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-5.jpg',
        },
        {
          id: v1(),
          avatar: 'https://themified.com/friend-finder/images/users/user-8.jpg',
        },
      ],
    },
  },
  callSubscriber() {
    console.log('State was rendered');
  },
  subscribe(observer) {
    this.callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispatch() {
    // this._state.DialogPage = dialogsReducer(this._state.DialogPage, action);
    // this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    // this._state.SideBar = sidebarReducer(this._state.SideBar, action);
    // this.callSubscriber(this._state);
  },
};
