import MyPosts from './MyPosts';
import { addPost } from './../../../redux/profilePageReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../hoc/WithAuthRedirect';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

const MyPostsContainer = () => {
    return compose(withAuthRedirect, connect(mapStateToProps, { addPost }))(MyPosts);
};

export default MyPostsContainer;