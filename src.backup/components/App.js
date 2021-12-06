import React from "react";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import "./App.css";
import Posts from "./Posts";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/" element={<Navigate replace to="/posts" />} />
            </Routes>
        </Router>
    );
}

export default App;
