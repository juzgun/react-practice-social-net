import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Send</button>
                <button>Clear</button>
            </div>
            <div className={classes.post}>
                Posts
                <Post message="Hi, how are you?" likes="2" shares="12" />
                <Post message="Thank I'm OK!" likes="13" shares="32" />
                <Post message="When u'll come home?" likes="24" shares="2" />
                <Post message="Next week, I guess..." likes="4" shares="1" />
            </div>
        </div >
    )
}

export default MyPosts;