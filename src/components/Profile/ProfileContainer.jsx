import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    if (!userId) { userId = props.loginedUserId };

    useEffect(() => {
        props.getProfile(userId)
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

export default connect(mapStateToProps, { getProfile })(WithUrlDataContainerComponent);