import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { actions, ProfileDataType } from '../../store/ProfileReducer';
import { AppRootStateType } from '../../store/store';

export type ProfileContainerPropsType = {
  setUserProfile: (data: ProfileDataType) => void;
};
class ProfileContainerOld extends React.Component<ProfileContainerPropsType> {
  componentDidMount() {
    const { setUserProfile } = this.props;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0//profile/2`)
      .then(response => {
        setUserProfile(response.data);
      });
  }

  /* render(){
       return (
           <ProfileFC userID={myUserID}/>
       )
   } */
}
const mapStateToProps = (state: AppRootStateType) => ({
  profile: state.ProfilePage.profile,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUserProfile: (data: ProfileDataType) => {
    console.log(data);
    dispatch(actions.setUserProfileAC(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainerOld);
