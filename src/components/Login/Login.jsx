import React from 'react';
import { Redirect } from 'react-router';
import classes from './Login.module.css';
import LoginReduxForm from './LoginForm/LoginForm';
import { connect } from 'react-redux';
import { postLoginData, deleteLoginData } from '../../redux/authReduser';

const Login = ({postLoginData, isAuth}) => {

    const onSubmit = (formData) => {
        postLoginData(formData);
        console.log(formData);
    }
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }

    return (
        <div className={classes.loginPage}>
            <div className={classes.loginFormWrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { postLoginData, deleteLoginData })(Login);