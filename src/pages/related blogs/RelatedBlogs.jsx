import React from "react";
import "./RelatedBlogs.css";
const RelatedBlogs = ({ relatedBlogs }) => {
  return (
    <>
      <section className="related-blogs-section">
        <h2>მსგავსი სტატიები</h2>
        <div className="related-container">
          {relatedBlogs.map((relatedBlog) => (
            <div key={relatedBlog.id}>
              {relatedBlog.title}
              <span>Categories: {relatedBlog.category.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
