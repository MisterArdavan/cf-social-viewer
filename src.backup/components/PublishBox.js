import React, { forwardRef } from "react";
import "./PublishBox.css";
import { Button } from "@material-ui/core";
import { useMutation } from "react-query";
import axios from "axios";

const sendPost = async (query) => {
    const resp = await axios.post(
        // "http://127.0.0.1:8787/posts",
        "https://cf-social.ardavan.workers.dev/posts",
        query,
        {
            headers: { "Content-Type": "application/json" },
        }
    );
    return resp.data;
};

const PublishBox = forwardRef(
    ({ content, title, username, setContent, setTitle, setUsername, setPosts }, ref) => {
        const onSuccess = (data) => {
            setContent("");
            setTitle("");
            setUsername("");
            setPosts(data);
        };
        const onError = (err) => {
            setContent("");
            setTitle("");
            setUsername("");
            console.log(err.response.data);
        };
        const mutation = useMutation(sendPost, { onSuccess, onError });

        const onClick = async (e) => {
            e.preventDefault();
            mutation.mutate({ username: username, title: title, content: content });
        };

        return (
            <div className="tweetBox" ref={ref}>
                <form>
                    <div className="publishBox__input">
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            placeholder="Title"
                            type="text"
                        />
                    </div>
                    <div className="publishBox__input">
                        <input
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder="What's happening?"
                            type="text"
                        />
                    </div>
                    <div className="publishBox__input">
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="Your username"
                            type="text"
                        />
                    </div>
                    <Button onClick={onClick} type="submit" className="publishBox__publishBotton">
                        Post
                    </Button>
                    {mutation.isError ? (
                        <div className="container alert alert-danger">
                            An error occurred: {mutation.error.response.data}
                        </div>
                    ) : null}
                </form>
            </div>
        );
    }
);

export default PublishBox;
