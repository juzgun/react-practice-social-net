import React from 'react';
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx'

const ProfileInfo = (props) => {
    return (
        <div className={classes.userInfo}>
            <p>
                <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus} />
            </p>
            <p>
                В активном поиске работы: {props.profile.lookingForAJob ? "Да" : "Нет"}
                {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : ""}
            </p>
            <p>
                Контакты:
                <p>Facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : ""}</p>
                <p>Site: {props.profile.contacts.website ? props.profile.contacts.website : ""}</p>
                <p>VK: {props.profile.contacts.vk ? props.profile.contacts.vk : ""}</p>
                <p>Twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : ""}</p>
                <p>instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : ""}</p>
                <p>youtube: {props.profile.contacts.youtube ? props.profile.contacts.youtube : ""}</p>
                <p>github: {props.profile.contacts.github ? props.profile.contacts.github : ""}</p>
                <p>Main Site: {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : ""}</p>
            </p>
        </div>
    )
}

export default ProfileInfo;