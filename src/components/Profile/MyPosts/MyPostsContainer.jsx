import MyPosts from './MyPosts';
import { clearPostInput, addPost, onPostChange } from './../../../redux/profilePageReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

const MyPostsContainer = connect(mapStateToProps, { addPost, clearPostInput, onPostChange })(MyPosts);

export default MyPostsContainer;