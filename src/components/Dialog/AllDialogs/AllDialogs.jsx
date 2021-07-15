import React from 'react';
import classes from "./AllDialogs.module.css";
import DialogItem from './DialogItem/DialogItem';

const AllDialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Alex", age: 24 },
        { id: 2, name: "Kate", age: 21 },
        { id: 3, name: "Sara", age: 19 },
        { id: 4, name: "Ann", age: 22 },
        { id: 5, name: "Bob", age: 18 },
        { id: 6, name: "Nik", age: 26 }
    ]

    let dialogsElements = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    return (
        <div className={classes.allDialogs}>
            <ul className={classes.allDialogsNames}>
                {dialogsElements};
            </ul>
        </div >
    )
}

export default AllDialogs;