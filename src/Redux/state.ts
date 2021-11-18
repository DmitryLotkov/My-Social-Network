import {v1} from "uuid";

export type ActionsTypes = ReturnType<typeof addPostActionAC> |
    ReturnType<typeof updateNewPostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateNewMessageTextAC>

export const addPostActionAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postMessage: postText
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}
export const addMessageAC = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessage: messageText
    } as const
}
export const updateNewMessageTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: text
    } as const
}
export type StoreType = {
    _state: RootStateType
    callSubscriber: (_state: RootStateType) => void
    subscribe: (observer: (_state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
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
export let store: StoreType = {
    _state: {
        DialogPage: {
            newMessageText: "",
            dialogs: [
                {
                    id: v1(),
                    name: "Dmitry Lomonosov",
                    avatar: "https://themified.com/friend-finder/images/users/user-4.jpg"
                },
                {id: v1(), name: "Sarah Konor", avatar: "https://themified.com/friend-finder/images/users/user-3.jpg"},
                {
                    id: v1(),
                    name: "Anton Dovgalo",
                    avatar: "https://themified.com/friend-finder/images/users/user-6.jpg"
                },
                {
                    id: v1(),
                    name: "Maya Vishnevskaya",
                    avatar: "https://themified.com/friend-finder/images/users/user-2.jpg"
                },
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
        ProfilePage: {
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

    },
    callSubscriber() {
        console.log("State was rendered")
    },
    subscribe(observer) {
        this.callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionsTypes) {
        if (action.type === "ADD-POST") {
            if (action.postMessage) {
                const newPost: PostType = {
                    id: v1(), message: action.postMessage, likesCount: 0
                }
                this._state.ProfilePage.postsData.push(newPost);
                this.callSubscriber(this._state);
            }
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.ProfilePage.NewPostText = action.newText;
            this.callSubscriber(this._state);
        } else if (action.type === "ADD-MESSAGE") {
            if(action.newMessage){
                const newMessage: MessagesType = {
                    id:v1(), message: action.newMessage
                }
                this._state.DialogPage.messages.push(newMessage);
                this.callSubscriber(this._state);
            }
        } else if(action.type === "UPDATE-NEW-MESSAGE-TEXT"){
                this._state.DialogPage.newMessageText = action.newText;
                this.callSubscriber(this._state)
        }
    },
}




