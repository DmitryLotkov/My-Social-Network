import React from "react";

import {Profile} from "../Profile/Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/reduxStore";
import {setUserProfileAC, ProfileDataType} from "../../Redux/ProfileReducer";
import {Dispatch} from "redux";



export type ProfileContainerPropsType = {
    setUserProfile: (data: ProfileDataType) => void
    profile: ProfileDataType

}
class ProfileContainer extends React.Component<ProfileContainerPropsType>{

    componentDidMount(){

        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then(response => {

            this.props.setUserProfile(response.data);
            }
        )
    }

   render(){
       return (
           <Profile/>
       )
   }
}
let mapStateToProps = (state: AppRootState) => ({
    profile: state.ProfilePage.profile
})
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserProfile: (data: ProfileDataType )=>{
            console.log(data);
            dispatch(setUserProfileAC(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)



