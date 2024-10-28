// components/BlogDetail.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-8 ">
      <h2 className="text-4xl font-black p-4 m-8 ">{post.title}</h2>
      <p className="text-lg">{post.content}</p>
      <div className="mt-8">

      <Link to="/" className=" border-2 inline-block p-4">Back to Blog List</Link>
      </div>
    </div>
  );
};

export default BlogDetail;
