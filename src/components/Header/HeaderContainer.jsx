import React, { useEffect } from 'react';
import Header from './Header';
import { getAuthUserData, deleteLoginData } from '../../redux/authReduser';
import { connect } from 'react-redux';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData();
    }, [props])
    return (
        <Header {...props} />
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData, deleteLoginData })(HeaderContainer);