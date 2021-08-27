import React, { useEffect, useCallback } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/profileAPI';

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    if (!userId) { userId = props.loginedUserId };
    const setUserProfile = useCallback((data) => {
        return props.setUserProfile(data)
    }, [props]);
    useEffect(() => {
        profileAPI.getProfile(userId)
            .then(data => {
                setUserProfile(data);
            }
            )
    }, [userId])

    return (
        <Profile {...props} profile={props.profile} />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    loginedUserId: state.auth.id
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);