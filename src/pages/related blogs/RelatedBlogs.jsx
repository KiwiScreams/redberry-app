import React from "react";
const RelatedBlogs = ({ relatedBlogs }) => {
  return (
    <>
      <section className="related-blogs">
        <h2>მსგავსი სტატიები</h2>
        <ul>
          {relatedBlogs.map((relatedBlog) => (
            <li key={relatedBlog.id}>
              {relatedBlog.title}
              <span>Categories: {relatedBlog.category.join(", ")}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default RelatedBlogs;
