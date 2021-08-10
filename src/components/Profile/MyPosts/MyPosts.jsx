import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import CreatePost from './createPost/CreatePost.jsx';

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(post => <Post message={post.postMessage} likes={post.likes} shares={post.shares} />)
    return (
        <div>
            <CreatePost
                clearPostInput={props.clearPostInput}
                addPost={props.addPost}
                newPostText={props.newPostText}
                onPostChange={props.onPostChange} />
            <div className={classes.post}>
                <h3>Posts</h3>
                {postsElements}
            </div>
        </div >
    )
}

export default MyPosts;