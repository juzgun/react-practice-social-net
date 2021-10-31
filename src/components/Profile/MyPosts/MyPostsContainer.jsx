import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profilePageReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../../hoc/WithAuthRedirect';
import * as Rect from "react";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

const MyPostsContainer = Rect.memo(() => {
    return compose(withAuthRedirect, connect(mapStateToProps, { addPost }))(MyPosts);
});

export default MyPostsContainer;