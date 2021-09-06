import MyPosts from './MyPosts';
import { clearPostInput, addPost, onPostChange } from './../../../redux/profilePageReducer';
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
    return compose(withAuthRedirect, connect(mapStateToProps, { addPost, clearPostInput, onPostChange }))(MyPosts);
};

export default MyPostsContainer;