import React from "react";
import "./NewPostButton.css";

const NewPostButton = (props) => {
    const handleClick = () => {
        props.onClick();
    };
    return (
        <div className="add-post-button" onClick={handleClick}>
            <div>+</div>
        </div>
    );
};

export default NewPostButton;
