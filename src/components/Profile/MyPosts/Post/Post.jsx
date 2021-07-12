import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg" alt="user avatar"></img>
            {props.message}
            <div className={classes.postData}>
                <div className={classes.postLike}>
                    <span>{props.likes} Like</span>
                </div>
                <div className={classes.postShare}>
                    <span>{props.shares} Shares</span>
                </div>
            </div>
        </div>
    )
}

export default Post;