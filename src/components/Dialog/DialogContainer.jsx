import Dialog from './Dialog';
import { addMessageActionCreator, clearMessageInputActionCreator, onMessageChangeActionCreator } from './../../redux/dialogsPageReducer';
import { connect } from 'react-redux';

// const DialogContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let dialogsPage = store.getState().dialogsPageReducer;

//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }

//                     let clearMessageInput = () => {
//                         store.dispatch(clearMessageInputActionCreator());
//                     }

//                     let onMessageChange = (text) => {
//                         store.dispatch(onMessageChangeActionCreator(text));
//                     };

//                     return (
//                         <Dialog
//                             dialogsData={dialogsPage.dialogsData}
//                             messagesData={dialogsPage.messagesData}
//                             newMessageText={dialogsPage.newMessageText}
//                             onAddMessage={addMessage}
//                             clearInput={clearMessageInput}
//                             onMessageChange={onMessageChange} />
//                     )
//                 }

//             }

//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },

        clearMessageInput: () => {
            dispatch(clearMessageInputActionCreator());
        },

        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        }
    };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;