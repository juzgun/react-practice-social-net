import React, { useEffect } from 'react';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReduser';
import { connect } from 'react-redux';
import { headerAPI } from '../../api/headerAPI';

const HeaderContainer = (props) => {
    useEffect(() => {
        headerAPI.getLogin()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    props.setAuthUserData(id, email, login);
                }

            }
            )
    }, [props])
    return (
        <Header isAuth={props.isAuth} login={props.login} />
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);