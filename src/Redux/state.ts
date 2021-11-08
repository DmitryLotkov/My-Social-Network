import {v1} from "uuid";

let rerenderEntireTree = (state:RootStateType) =>{
    console.log("State was rendered")
}
export let subscriber = (observer: (state: RootStateType) => void) =>{
    rerenderEntireTree = observer
}

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
export type SideBarType = {
    onlineFriends: Array<OnlineFriendType>
}
export type ProfilePageType = {
    postsData: Array<PostType>
    NewPostText: string
}
export type DialogPageType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>
    newMessageText: string
}
export type RootStateType = {
    DialogPage: DialogPageType,
    ProfilePage: ProfilePageType,
    SideBar: SideBarType,
}

export const state: RootStateType = {
    DialogPage: {
        newMessageText: "",
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
        NewPostText: "",
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

export let addMessageCallBack = (postMessage: string) => {
    if(postMessage){
        const newPost = {
            id: v1(), message: postMessage, likesCount: 0}
        state.ProfilePage.postsData.push(newPost);
        rerenderEntireTree(state);
    }
}
export const updateNewPostText = (newText: string) =>{
    state.ProfilePage.NewPostText = newText;
    rerenderEntireTree(state);
}
export const addFriendMessage = (friendMessage: string) => {
    if(friendMessage) {
        const newFriendMessage = {
            id:v1(), message: friendMessage, date: new Date()}
        state.DialogPage.messages.push(newFriendMessage)
    }
    // rerenderEntireTree();
}


