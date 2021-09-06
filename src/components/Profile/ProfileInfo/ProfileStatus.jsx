import React from 'react';
import { useState } from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(props.status);

    return (
        <div className={classes.userStatus}>
            {!editMode &&
                <div>
                    Статус: <span onClick={() => setEditMode(!editMode)}>{currentStatus}</span>
                </div>}
            {editMode &&
                <div>
                    <input onChange={(e) => setCurrentStatus(e.target.value)} value={currentStatus} />
                    <button onClick={() => setEditMode(!editMode)}>Save</button>
                </div>}
        </div>
    )
}

export default ProfileStatus;