import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import CreatePost from './createPost/CreatePost.jsx';

const MyPosts = (props) => {

    let postsData = props.postdata;

    let postsElements = postsData
        .map(post => <Post message={post.postMessage} likes={post.likes} shares={post.shares} />)

    return (
        <div>
            <CreatePost />
            <div className={classes.post}>
                <h3>Posts</h3>
                {postsElements};
            </div>
        </div >
    )
}

export default MyPosts;