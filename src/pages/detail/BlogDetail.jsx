import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import { blogs } from "../../assets/data/data";
import { useState, useEffect } from "react";
import RelatedBlogs from "../related blogs/RelatedBlogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const relatedBlogs = blogs
    .filter((relatedBlog) => {
      if (relatedBlog.id === blogId) return false;
      return blog.category.some((cat) => relatedBlog.category.includes(cat));
    })
    .filter((relatedBlog) => relatedBlog.category.length > 0);
  return (
    <>
      <section className="blog-detail">
        <div className="blog-detail-image">
          <img src={blog.image} alt="" />
        </div>
        <div className="text">
          <p className="author">{blog.author}</p>
          <span className="date">
            {blog.date} : {blog.authorEmail}
          </span>
          <p className="title">{blog.title}</p>
          {/* {blog.category.map((cat) => {
            return <div key={cat}>{cat}</div>;
          })} */}
          <p>{blog.category}</p>
          <p>{blog.description}</p>
        </div>
      </section>
      <RelatedBlogs relatedBlogs={relatedBlogs} />
    </>
  );
};

export default BlogDetail;
