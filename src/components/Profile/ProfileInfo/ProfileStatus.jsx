import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {

    let status = '---------'

    if (!props.status) {
        status = props.status
    }

    const [editMode, setEditMode] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);
    const updateProfileStatus = props.updateProfileStatus;

    useEffect(() => {
        setCurrentStatus(props.status)
    }, [props.status])

    return (
        <div className={classes.userStatus}>
            {!editMode &&
                <div>
                    Статус: <span onClick={() => setEditMode(!editMode)}>{currentStatus || '----'}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={(e) => setCurrentStatus(e.target.value)} value={currentStatus} />
                    <button onClick={() => { setEditMode(!editMode); updateProfileStatus(currentStatus) }}>Save</button>
                </div>}
        </div>
    )
}

export default ProfileStatus;