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
  const categories = [
    { category: "Market", label: "მარკეტი" },
    { category: "Application", label: "აპლიკაცია" },
    { category: "AI", label: "ხელოვნური ინტელექტი" },
    { category: "UI/UX", label: "UI/UX" },
    { category: "Explore", label: "კვლევა" },
    { category: "Figma", label: "Figma" },
  ];
  const categoryMap = categories.reduce((acc, curr) => {
    acc[curr.category] = curr.label;
    return acc;
  }, {});
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
          <div className="cats-container">
            {blog.category.map((cat) => {
              const label = categoryMap[cat];
              if (cat.toLowerCase().includes("market")) {
                return (
                  <div key={cat} className="category-1 cat">
                    {label}
                  </div>
                );
              } else if (cat.toLowerCase().includes("application")) {
                return (
                  <div key={cat} className="category-2 cat">
                    {label}
                  </div>
                );
              } else if (cat.toLowerCase().includes("ai")) {
                return (
                  <div key={cat} className="category-3 cat">
                    {label}
                  </div>
                );
              } else if (cat.toLowerCase().includes("ui/ux")) {
                return (
                  <div key={cat} className="category-4 cat">
                    {label}
                  </div>
                );
              } else if (cat.toLowerCase().includes("explore")) {
                return (
                  <div key={cat} className="category-5 cat">
                    {label}
                  </div>
                );
              } else if (cat.toLowerCase().includes("figma")) {
                return (
                  <div key={cat} className="category-6 cat">
                    {label}
                  </div>
                );
              } else {
                return <div key={cat}>{label}</div>;
              }
            })}
          </div>
          <p>{blog.description}</p>
        </div>
      </section>
      <RelatedBlogs relatedBlogs={relatedBlogs} />
    </>
  );
};

export default BlogDetail;
