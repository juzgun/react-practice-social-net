import React from 'react';
import classes from './LoginForm.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControls/FormsControls';
import { required } from '../../../utils/validators/validators';


const LoginForm = (props) => {
    return (
        <div className={classes.loginForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Email" name={'email'} component={Input} validate={[required]} />
                </div>
                <div>
                    <Field placeholder="Password" name={'password'} component={Input} validate={[required]} type={"password"} />
                </div>
                <div>
                    <Field component={Input} name={'checkbox'} type={'checkbox'} validate={[required]} /> remember me
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