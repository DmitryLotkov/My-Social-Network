import {v1} from "uuid";

export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
    avatar: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type OnlineFriendType = {
    id: string
    avatar: string
}
type SideBarType = {
    onlineFriends: Array<OnlineFriendType>
}
type ProfilePageType = {
    postsData: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
}
export type RootStateType = {
    DialogPage?: DialogPageType,
    ProfilePage?: ProfilePageType,
    SideBar?: SideBarType,
}

export const state: RootStateType = {
    DialogPage: {
        dialogs: [
            {id: v1(), name: "Dmitry Lomonosov", avatar: "https://themified.com/friend-finder/images/users/user-4.jpg"},
            {id: v1(), name: "Sarah Konor", avatar: "https://themified.com/friend-finder/images/users/user-3.jpg"},
            {id: v1(), name: "Anton Dovgalo", avatar: "https://themified.com/friend-finder/images/users/user-6.jpg"},
            {id: v1(), name: "Maya Vishnevskaya", avatar: "https://themified.com/friend-finder/images/users/user-2.jpg"},
        ]
    ,
    messages: [
        {id: v1(), message: "What is the weather forecast for tomorrow?"},
        {id: v1(), message: "It seems to bee good)"},
        {id: v1(), message: "Do you know Sarah?"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "What are you waiting for?"},
    ],
    },
    ProfilePage:{
        postsData: [
            {id: v1(), message: "How are you?", likesCount: 11},
            {id: v1(), message: "What is your name?", likesCount: 16},
            {id: v1(), message: "What are you waiting for?", likesCount: 11},
        ]
    },
    SideBar: {
        onlineFriends: [
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-4.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-3.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-6.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-2.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-7.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-10.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-9.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-5.jpg"},
            {id: v1(), avatar: "https://themified.com/friend-finder/images/users/user-8.jpg"},
        ],
    },
}