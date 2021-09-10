import React from 'react';
import classes from './Login.module.css';
import LoginReduxForm from './LoginForm/LoginForm';


const Login = (props) => {
    
    return (
        <div className={classes.loginPage}>
            <div className={classes.loginFormWrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={props.onSubmit} />
            </div>
        </div>
    )
}

export default Login;