import {v1} from "uuid";
import user1 from "./../Images/Users/user-1.jpg";
import user2 from "./../Images/Users/user-2.jpg";
import user3 from "./../Images/Users/user-3.jpg";
import user4 from "./../Images/Users/user-4.jpg";
import user5 from "./../Images/Users/user-5.jpg";
import user6 from "./../Images/Users/user-6.jpg";
import user7 from "./../Images/Users/user-7.jpg";
import user8 from "./../Images/Users/user-8.jpg";
import user9 from "./../Images/Users/user-9.jpg";
import postPhoto from "./../Images/Post photo.png";
import {
    PostType,
} from "./ProfileReducer";


export type OnlineFriendType = {
    id: string
    avatar: string
}

enum ACTIONS_TYPE {
    ADD_POST = "PROFILE/ADD-POST",
    DELETE_MY_POST = "PROFILE/DELETE-MY-POST",
    DELETE_USERS_POST = "PROFILE/DELETE-USERS-POST"
}

export type UsersOnWallType = {
    id: string
    avatar: string
    name: string
    position: string
    postText: string
    postPhoto: string | undefined

}
export type ProfileActionsType = ReturnType<typeof addPostActionAC>
    | ReturnType<typeof deleteMyPostAC>
    | ReturnType<typeof deleteUsersPostAC>

export type PostsType = {
    onlineFriends: Array<OnlineFriendType>
    anyUserPostsData: Array<UsersOnWallType>
    myPostsData: Array<PostType>
}
const initialState: PostsType = {
    myPostsData: [
        {id: v1(), message: "I want to be a serious frontend developer.", likesCount: 0},
    ],
    onlineFriends: [
        {id: v1(), avatar: user1},
        {id: v1(), avatar: user2},
        {id: v1(), avatar: user3},
        {id: v1(), avatar: user4},
        {id: v1(), avatar: user5},
        {id: v1(), avatar: user6},
        {id: v1(), avatar: user7},
        {id: v1(), avatar: user8},
        {id: v1(), avatar: user9},
    ],
    anyUserPostsData: [

        {
            id: v1(),
            avatar: user5,
            name: "Theresa Steward",
            position: "iOS developer",
            postPhoto: undefined,
            postText: "What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? " +
                "What was it to the Dursleys if Harry went back to school without any of his homework done? " +
                "The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)."
        },
        {
            id: v1(),
            avatar: user4,
            name: "Kyle Fisher",
            position: "Product manager",
            postPhoto: postPhoto,
            postText: "How's your day going, guys?",
        },
        {
            id: v1(),
            avatar: user7,
            name: "Audrey Alexander",
            position: "Android developer",
            postPhoto: undefined,
            postText: "The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. " +
                "«I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. " +
                "And I can run away from you, grey wolf!» says the bun and runs away.",
        },
    ]
}
const UserPostsReducer = (state: PostsType = initialState, action: ProfileActionsType) => {
    switch (action.type) {
        case ACTIONS_TYPE.ADD_POST:
            return {
                ...state,
                myPostsData: [...state.myPostsData, {id: v1(), message: action.message, likesCount: 0}]
            };
        case ACTIONS_TYPE.DELETE_MY_POST:
            return {...state, myPostsData: state.myPostsData.filter(post => post.id !== action.id)}
        case ACTIONS_TYPE.DELETE_USERS_POST:
            return {...state, anyUserPostsData: state.anyUserPostsData.filter(post => post.id !== action.id)}
        default:
            return state;
    }
}

//actions
export const addPostActionAC = (message: string) => ({type: ACTIONS_TYPE.ADD_POST, message} as const)
export const deleteMyPostAC = (id: string) => ({type: ACTIONS_TYPE.DELETE_MY_POST, id} as const);
export const deleteUsersPostAC = (id: string) => ({type: ACTIONS_TYPE.DELETE_USERS_POST, id} as const);

export default UserPostsReducer;