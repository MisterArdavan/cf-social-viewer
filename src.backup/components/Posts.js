import React, { useEffect, useState } from "react";
import Post from "./Post";
import PublishBox from "./PublishBox";
import "./Posts.css";
import { QueryClient, QueryClientProvider } from "react-query";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const queryClient = new QueryClient();

    useEffect(() => {
        const getPosts = async () => {
            const resp = await fetch(
                // "http://127.0.0.1:8787/posts"
                "https://cf-social.ardavan.workers.dev/posts"
            );
            const postsResp = await resp.json();
            setPosts(postsResp);
        };

        getPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2> Cloudflare Social Media</h2>
            </div>
            <QueryClientProvider client={queryClient}>
                <PublishBox
                    content={content}
                    title={title}
                    username={username}
                    setContent={setContent}
                    setTitle={setTitle}
                    setUsername={setUsername}
                    setPosts={setPosts}
                />
            </QueryClientProvider>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    content={post.content}
                    title={post.title}
                    timestamp={post.submitted_at}
                />
            ))}
        </div>
    );
};

export default Posts;
