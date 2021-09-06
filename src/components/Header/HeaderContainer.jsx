import React, { useEffect } from 'react';
import Header from './Header';
import { getAuthUserData } from '../../redux/authReduser';
import { connect } from 'react-redux';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData();
    }, [props])
    return (
        <Header isAuth={props.isAuth} login={props.login} />
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);