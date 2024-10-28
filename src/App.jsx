// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";
import BlogDetail from "./components/BlogDetail";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage when app starts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    if (storedPosts) setPosts(storedPosts);
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  const editPost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogList posts={posts} deletePost={deletePost} />} />
        <Route path="/new" element={<BlogForm addPost={addPost} />} />
        <Route path="/edit/:id" element={<BlogForm posts={posts} editPost={editPost} />} />
        <Route path="/post/:id" element={<BlogDetail posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
 