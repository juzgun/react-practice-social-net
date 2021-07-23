import React from 'react';
import classes from './CreatePost.module.css';


const CreatePost = (props) => {


    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let clearPostInput = () => {
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={classes.newPost}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <textarea onChange={onPostChange} placeholder="Do you have some news?" cols="90" rows="3" className={classes.textarea} ref={newPostElement} value={props.newPostText} />
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button onClick={clearPostInput}>Clear</button>
                </div>
            </div>
        </div>
    )
};

export default CreatePost;