import MyPosts from './MyPosts';
import { clearPostInputActionCreator, addPostActionCreator, onPostChangeActionCreator } from './../../../redux/profilePageReducer';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }

//                     let clearPostInput = () => {
//                         store.dispatch(clearPostInputActionCreator());
//                     }

//                     let onPostChange = (text) => {
//                         store.dispatch(onPostChangeActionCreator(text));
//                     };

//                     return (<MyPosts
//                         posts={state.profilePageReducer.postsData}
//                         updateNewPostText={onPostChange}
//                         clearInput={clearPostInput}
//                         onAddPost={addPost}
//                         newPostText={state.profilePageReducer.newPostText}
//                         onPostChange={onPostChange} />)
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        clearPostInput: () => {
            dispatch(clearPostInputActionCreator());
        },

        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text));
        }
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;