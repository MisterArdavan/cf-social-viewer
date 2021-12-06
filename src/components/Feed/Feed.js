import React, { useState, useEffect } from "react";
import "./Feed.css";
import Navbar from "../Navbar/Navbar";
import NewPostModal from "../NewPostModal/NewPostModal";
import NewPostButton from "../NewPostButton/NewPostButton";
import Post from "../Post/Post";
import axios from "axios";

const Feed = () => {
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const resp = await axios.get(API_URLS.POSTS_URL);
            setPosts(resp.data);
        };
        getPosts();
    }, []);

    const sendPost = async (username, title, content) => {
        let data = {
            username,
            title,
            content,
        };
        try {
            const resp = await axios.post(API_URLS.POSTS_URL, data, {
                headers: { "Content-Type": "application/json" },
            });
            setPosts(resp.data);
            setError(null);
            hideModal();
        } catch (e) {
            setError(e.response.data);
        }
    };

    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);
        setError(null);
    };

    const renderPosts = () => {
        return posts?.map((post) => (
            <Post
                key={post.id}
                username={post.username}
                content={post.content}
                title={post.title}
                timestamp={post.submitted_at}
            />
        ));
    };

    return (
        <div className="feed-layout">
            <Navbar brandName={"Cloudflare Social Media"} />
            {modal && <NewPostModal onCancel={hideModal} onSubmit={sendPost} error={error} />}
            {!modal && <NewPostButton onClick={showModal} />}
            <div className="posts">{renderPosts()}</div>
        </div>
    );
};

export default Feed;
