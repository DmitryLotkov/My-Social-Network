import {
    addPostActionAC,
    deletePostAC, ProfileDataType,
    ProfilePageType,
    profileReducer,
    setStatusAC,
    setUserProfileAC
} from "./ProfileReducer";

let startState: ProfilePageType;
beforeEach(() => {
    startState = {
        postsData: [
            {id: "1", message: "Do you have a job for me? What if I find it?", likesCount: 0},
            {id: "2", message: "I want to be a serious frontend developer.", likesCount: 0},
            {id: "3", message: "What is the good weather today,isn't it?", likesCount: 0},
        ],
        status: "",
        profile: {
            userId:0,
            fullName: "",
            lookingForAJob: true,
            lookingForAJobDescription: "",
            aboutMe: "",
            contacts: {
                facebook: "",
                github: "",
                instagram: "",
                mainLink: "",
                twitter: "",
                vk: "",
                website: "",
                youtube: "",
            },
            photos:
                {
                    small: "",
                    large: "",
                }
        }
    }
});
test('new post should be added', () => {

    const action = addPostActionAC("new String");

    const endState = profileReducer(startState, action)

    expect(endState.postsData.length).toBe(4);
    expect(endState.postsData[3].message).toBe("new String");

});

test('chosen post must be deleted', () => {

    const action = deletePostAC("1");

    const endState = profileReducer(startState, action)

    expect(endState.postsData.length).toBe(2);
    expect(endState.postsData[0].id).toBe("2")
});

test('profile status must be updated', () => {

    const action = setStatusAC("New Profile status");

    const endState = profileReducer(startState, action)

    expect(endState.status).toBe("New Profile status");

});
test('new profile must be set', () => {

    const action = setUserProfileAC({aboutMe: "Frontend developer", fullName: "Dmitry"} as ProfileDataType);

    const endState = profileReducer(startState, action)

    expect(endState.profile.aboutMe).toBe("Frontend developer");
    expect(endState.profile.fullName).toBe("Dmitry");

});


