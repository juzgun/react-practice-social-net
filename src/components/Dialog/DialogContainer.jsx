import Dialog from './Dialog';
import { addMessage } from './../../redux/dialogsPageReducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData
    };
};


const DialogContainer = () => {
    return compose(withAuthRedirect, connect(mapStateToProps, { addMessage }))(Dialog);
};

export default DialogContainer;