// components/BlogList.js
import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ posts, deletePost }) => (
  <div className=" m-8">
    <h2 className="text-2xl font-black">Blog Posts</h2>
    {posts.map((post) => (
      <div className="m-8 bg-yellow-100 " key={post.id}>
        <h3 className="text-3xl font-black text-black underline">{post.title}</h3>
        <p>{post.content.slice(0, 100)}...</p>
        <div className=" flex gap-4 justify-end items-center">
          <Link to={`/post/${post.id}`}>
            <span className="btn">Read more</span>
          </Link>
          <Link to={`/edit/${post.id}`}>
            <span className="btn ">Edit</span>
          </Link>
          <button onClick={() => deletePost(post.id)}>
            {" "}
            <span className="btn">Delete</span>{" "}
          </button>
        </div>
      </div>
    ))}
    <Link className="p-8" to="/new"> <span className="btn text-black border-2 p-4 "> Add New Post</span></Link>
  </div>
);

export default BlogList;


