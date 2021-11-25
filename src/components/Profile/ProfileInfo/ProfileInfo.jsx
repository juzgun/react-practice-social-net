import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = ({profile, status, updateProfileStatus, isOwner, setEditMode, ...props}) => {
    return (
        <div className={classes.userInfo}>
            <p>
                <ProfileStatus status={status} updateProfileStatus={updateProfileStatus} isOwner={isOwner} />
            </p>
            <p>
                В активном поиске работы: {profile.lookingForAJob ? "Да" : "Нет"}
            </p>
            {profile.lookingForAJob &&
            <p>
                Профессиональные умения: {profile.lookingForAJobDescription}
            </p>
            }
            <p>
                Контакты:
                {isOwner ? <div><button onClick={setEditMode}>edit</button></div> : ''}
                {Object.keys(profile.contacts).map(key => {
                    return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </p>
        </div>
    )
}

export const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>:{contactValue ? contactValue : ''}
        </div>
    )
}

export default ProfileInfo;