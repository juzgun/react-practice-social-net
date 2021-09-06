import Dialog from './Dialog';
import { addMessage, clearMessageInput, onMessageChange } from './../../redux/dialogsPageReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
    };
};


const DialogContainer = () => {
    return compose(withAuthRedirect, connect(mapStateToProps, { addMessage, clearMessageInput, onMessageChange }))(Dialog);
};

export default DialogContainer;