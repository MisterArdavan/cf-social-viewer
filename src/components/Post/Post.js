import React from "react";
import "./Post.css";

const Post = (props) => {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-username">{props.username}</div>
                <div className="post-timestamp">{new Date(props.timestamp).toLocaleString()}</div>
            </div>
            <div className="post-content">
                <div className="post-title">{props.title}</div>
                <div className="post-text">{props.content}</div>
            </div>
            <div className="post-actions"></div>
        </div>
    );
};

export default Post;
