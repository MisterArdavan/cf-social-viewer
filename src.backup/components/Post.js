import React, { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(({ id, username, content, title, timestamp }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {title} <span className="post__headerSpecial">@{username} </span>
                            <span className="post__headerSpecial">
                                Posted at {new Date(timestamp).toLocaleString()}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Post;
