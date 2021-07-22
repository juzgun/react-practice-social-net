import React from 'react';
import classes from "./AllDialogs.module.css";
import DialogItem from './DialogItem/DialogItem';

const AllDialogs = (props) => {
    console.log(props)
    let dialogsElements = props.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    return (
        <div className={classes.allDialogs}>
            <ul className={classes.allDialogsNames}>
                {dialogsElements}
            </ul>
        </div >
    )
}

export default AllDialogs;