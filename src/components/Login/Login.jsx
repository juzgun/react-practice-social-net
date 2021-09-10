import React from 'react';
import classes from './Login.module.css';
import LoginReduxForm from './LoginForm/LoginForm';


const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className={classes.loginPage}>
            <div className={classes.loginFormWrapper}>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Login;