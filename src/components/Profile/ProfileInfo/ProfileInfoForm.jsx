import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input, Textarea} from '../../common/FormsControls/FormsControls';
import {required} from '../../../utils/validators/validators';
import {Contacts} from "./ProfileInfo";
import classes from "../../Login/LoginForm/LoginForm.module.css"

const ProfileInfoEditor = ({profile, setEditMode, error, ...props}) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>Forma</div>
                {
                    error && <div className={classes.form_summary_error}>
                        {error}
                    </div>
                }
                <button>Save</button>
                <div>
                    <b>
                        Full Name
                    </b> : <Field placeholder="Full Name" name={'fullName'} component={Input}/>
                </div>
                <div>
                    <b>
                        Loojing For A Job
                    </b> : <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
                </div>
                <div>
                    <b>
                        My Skills
                    </b> : <Field placeholder="Type your skills" name={'lookingForAJobDescription'} component={Textarea} />
                </div>
                <div>
                    <b>
                        About Me
                    </b> : <Field placeholder="Tell about yourself" name={'aboutMe'} component={Textarea} />
                </div>
                <div>
                    Контакты:
                    {Object.keys(profile.contacts).map(key => {
                        return <div>
                            <b>{key}:<Field placeholder={key} name={"contacts." + key} component={Input} /></b>
                        </div>
                    })}
                </div>
            </form>
        </div>
    )
}

const ProfileInfoForm = reduxForm({
    form: 'editProfile'
})(ProfileInfoEditor)

export default ProfileInfoForm;

