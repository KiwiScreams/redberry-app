import { useEffect, useState } from "react";
import { blogs } from "../../assets/data/data";
import "./MultiFilter.css";
import arrowImage from "../../assets/images/Arrow.svg";
import { Link } from "react-router-dom";
const MultiFilter = () => {
  const updatedBlogs = blogs.map((blog) => ({
    ...blog,
    categories: Array.isArray(blog.category) ? blog.category : [blog.category],
  }));
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(updatedBlogs);

  let filters = [
    { category: "Market", label: "მარკეტი" },
    { category: "Application", label: "აპლიკაცია" },
    { category: "AI", label: "ხელოვნური ინტელექტი" },
    { category: "UI/UX", label: "UI/UX" },
    { category: "Explore", label: "კვლევა" },
    { category: "Figma", label: "Figma" },
  ];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      const filteredItems = updatedBlogs.filter((blog) => {
        return selectedFilters.every((filter) =>
          blog.categories.includes(filter)
        );
      });
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems(updatedBlogs);
    }
  };
  const getCategoryClassName = (category) => {
    const filter = filters.find((filter) => filter.category === category);
    return `category-${filters.indexOf(filter) + 1}`;
  };
  return (
    <>
      <section className="filter-body">
        <section className="buttons-container">
          {filters.map((filter, idx) => (
            <button
              onClick={() => handleFilterButtonClick(filter.category)}
              className={`button ${
                selectedFilters?.includes(filter.category)
                  ? "active-filter"
                  : ""
              }`}
              key={`filters-${idx}`}
            >
              {filter.label}
            </button>
          ))}
        </section>

        <section className="blogs-container">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <div key={`blogs-${idx}`} className="blog-card">
                <div className="blog-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="text">
                  <p className="author">{item.author}</p>
                  <span className="date">{item.date}</span>
                  <p className="title">{item.title}</p>
                  <p className="category">
                    {Array.isArray(item.categories)
                      ? item.categories.map((category, idx) => (
                          <span
                            key={`category-${idx}`}
                            className={getCategoryClassName(category)}
                          >
                            {category}
                          </span>
                        ))
                      : item.categories}
                  </p>
                  <p className="desc-content">
                    {item.description} <span className="read-more">...</span>
                  </p>
                  <Link to={`/blog/${item.id}`}>
                    სრულად ნახვა <img src={arrowImage} alt="" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-category">ასეთი ბლოგი არ არსებობს</p>
          )}
        </section>
      </section>
    </>
  );
};

export default MultiFilter;
