import React from 'react';
import classes from './CreatePost.module.css';

const CreatePost = () => {
    return (
        <div className={classes.newPost}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea placeholder="Do you have some news?" cols="90" rows="3" className={classes.textarea}></textarea>
                <div>
                    <button>Add Post</button>
                    <button>Clear</button>
                </div>
            </div>
        </div>
    )
};

export default CreatePost;