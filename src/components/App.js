import React from "react";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import Feed from "./Feed";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/posts" element={<Feed />} />
                <Route path="/" element={<Navigate replace to="/posts" />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
