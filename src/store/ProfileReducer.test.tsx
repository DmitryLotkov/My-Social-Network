import {
    ProfileDataType,
    ProfilePageType,
    profileReducer,
    setStatusAC,
    setUserProfileAC
} from "./ProfileReducer";

let startState: ProfilePageType;
beforeEach(() => {
    startState = {
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


