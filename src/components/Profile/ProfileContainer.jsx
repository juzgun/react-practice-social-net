import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getProfileStatus, updateProfileStatus } from '../../redux/profilePageReducer';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    if (!userId) {
        userId = props.loginedUserId;
        if (!userId) {
            props.history.push('/login')
        }
    };

    useEffect(() => {
        props.getProfile(userId);
        props.getProfileStatus(userId);
    }, [userId])

    return (
        <Profile {...props} profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus} />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    loginedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

const ProfilePage = () => {
    return compose(
        withAuthRedirect,
        withRouter,
        connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus })
    )(ProfileContainer);
};

export default ProfilePage;