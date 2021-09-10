import React from 'react';
import classes from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'


const LoginForm = (props) => {
    return (
        <div className={classes.loginForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Login" name={'login'} component={'input'} />
                </div>
                <div>
                    <Field placeholder="Password" name={'pass'} component={'input'} />
                </div>
                <div>
                    <Field component={'input'} name={'checkbox'} type={'checkbox'} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;