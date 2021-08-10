import React from 'react';
import AllDialogs from './AllDialogs/AllDialogs';
import DialogMessages from './DialogMessages/DialogMessages';
import classes from "./Dialog.module.css"

const Dialog = (props) => {

    return (
        <div className={classes.dialog}>
            <div className={classes.dialogTopic}>DIALOGS</div>
            <div className={classes.dialogWrapper}>
                <AllDialogs dialogsData={props.dialogsData} />
                <DialogMessages
                    messagesData={props.messagesData}
                    newMessageText={props.newMessageText}
                    onAddMessage={props.addMessage}
                    clearInput={props.clearMessageInput}
                    onMessageChange={props.onMessageChange} />
            </div>
        </div>
    )
}

export default Dialog;