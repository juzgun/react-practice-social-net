import React from 'react';
import { connect } from 'react-redux';
import { postLoginData } from '../../redux/authReduser';
import Login from './Login';


const LoginContainer = (props) => {

    const onSubmit = (formData) => {
        postLoginData(formData);
    }

    return (
        <Login onSubmit={onSubmit} postLoginData={postLoginData} />
    )
}

let mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, { postLoginData })(LoginContainer);