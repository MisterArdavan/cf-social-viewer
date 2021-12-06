import React, { useState, useEffect } from "react";
import "./Feed.css";
import Navbar from "./Navbar";
import NewPostModal from "./NewPostModal";
import NewPostButton from "./NewPostButton";
import axios from "axios";
import Post from "./Post";

const Feed = () => {
    const [modal, setModal] = useState(false);
    const [error, setError] = useState(""); //TODO
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log(API_URLS);
        const getPosts = async () => {
            const resp = await fetch(
                //TODO
                API_URLS.POSTS_URL
            );
            const postsResp = await resp.json();
            setPosts(postsResp);
        };
        getPosts();
    }, []);

    const sendPost = async (username, title, content) => {
        hideModal();
        let data = {
            username,
            title,
            content,
        };
        try {
            const resp = await axios.post(
                // "http://127.0.0.1:8787/posts",
                "https://cf-social.ardavan.workers.dev/posts",
                data,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            setPosts(resp.data);
        } catch (e) {
            setError(e.response.data);
        }
    };

    const showModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);
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
            <Navbar brandName={"CloudFlare Social Media"} />
            {modal && <NewPostModal onCancel={hideModal} onSubmit={sendPost} />}
            {!modal && <NewPostButton onClick={showModal} />}
            <div className="posts">{renderPosts()}</div>;
        </div>
    );
};

export default Feed;
