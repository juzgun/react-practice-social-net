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
                    <Field component={Input} name={'checkbox'} type={'checkbox'} validate={[]} /> remember me
                </div>
                {props.captchaUrl && <div>
                    <img src={props.captchaUrl} />
                    <Field placeholder="Please type captcha" name={'captcha'} component={Input} validate={[required]} />
                </div>}
                {
                    props.error && <div className={classes.form_summary_error}>
                        {props.error}
                    </div>
                }
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