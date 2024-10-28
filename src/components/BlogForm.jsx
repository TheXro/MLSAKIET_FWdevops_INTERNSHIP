// components/BlogForm.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = ({ addPost, editPost, posts }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const postToEdit = posts.find(post => post.id === parseInt(id));
      if (postToEdit) {
        setTitle(postToEdit.title);
        setContent(postToEdit.content);
      }
    }
  }, [id, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editPost({ id: parseInt(id), title, content });
    } else {
      addPost({ title, content });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">{id ? "Save Changes" : "Add Post"}</button>
    </form>
  );
};

export default BlogForm;
