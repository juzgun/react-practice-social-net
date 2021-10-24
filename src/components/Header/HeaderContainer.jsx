import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { deleteLoginData } from '../../redux/authReduser';

const HeaderContainer = (props) => {

    // useEffect(() => {
    //     props.getAuthUserData();
    // }, [props]);

    return (
        <Header {...props} />
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { deleteLoginData })(HeaderContainer);