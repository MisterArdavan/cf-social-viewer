import React, { useState } from "react";
import "./NewPostModal.css";

const NewPostModal = (props) => {
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [content, setContent] = useState("");
    const handleCancel = () => {
        props.onCancel();
    };

    const handleSubmit = () => {
        props.onSubmit(username, title, content);
    };

    return (
        <div className="modal-background">
            <div className="new-post-modal">
                <div className="new-post-inputs">
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        value={content}
                        placeholder="content"
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                {props.error && (
                    <div className="submit-error-alert">An error occurred: {props.error}</div>
                )}
                <div className="new-post-actions">
                    <div className="submit button" onClick={handleSubmit}>
                        submit
                    </div>
                    <div className="cancel button" onClick={handleCancel}>
                        cancel
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPostModal;
