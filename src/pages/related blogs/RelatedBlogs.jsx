import React from "react";
import "./RelatedBlogs.css";
import { Link } from "react-router-dom";
import arrowImage from "../../assets/images/Arrow.svg";
const getCategoryClassName = (category) => {
  switch (category) {
    case "Market":
      return "market";
    case "Application":
      return "application";
    case "AI":
      return "ai";
    case "UI/UX":
      return "ui-ux";
    case "Explore":
      return "explore";
    case "Figma":
      return "figma";
    default:
      return "";
  }
};
const RelatedBlogs = ({ relatedBlogs }) => {
  let filters = [
    { category: "Market", label: "მარკეტი" },
    { category: "Application", label: "აპლიკაცია" },
    { category: "AI", label: "ხელოვნური ინტელექტი" },
    { category: "UI/UX", label: "UI/UX" },
    { category: "Explore", label: "კვლევა" },
    { category: "Figma", label: "Figma" },
  ];
  const categoryMap = filters.reduce((acc, curr) => {
    acc[curr.category] = curr.label;
    return acc;
  }, {});

  return (
    <>
      <section className="related-blogs-section">
        <h2>მსგავსი სტატიები</h2>
        <div className="related-blogs-container">
          {relatedBlogs.map((relatedBlog) => (
            <div key={relatedBlog.id} className="blog-card">
              <div className="blog-image">
                <img src={relatedBlog.image} alt="" />
              </div>
              <div className="text">
                <p className="author">{relatedBlog.author}</p>
                <span className="date">{relatedBlog.date}</span>
                <p className="title">{relatedBlog.title}</p>
                <p className="category">
                  {(Array.isArray(relatedBlog.categories)
                    ? relatedBlog.categories
                    : [relatedBlog.categories]
                  ).map((category, idx) => (
                    <span
                      key={`category-${idx}`}
                      className={getCategoryClassName(category)}
                    >
                      {categoryMap[category]}
                    </span>
                  ))}
                </p>
                <p className="desc-content">
                  {relatedBlog.description}
                  <span className="read-more">...</span>
                </p>
                <Link to={`/blog/${relatedBlog.id}`}>
                  სრულად ნახვა <img src={arrowImage} alt="" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RelatedBlogs;
