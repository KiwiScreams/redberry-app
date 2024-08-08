import { useEffect, useState } from "react";
import { blogs } from "../../assets/data/data";

const MultiFilter = () => {
  const updatedBlogs = blogs.map((blog) => ({
    ...blog,
    categories: Array.isArray(blog.category) ? blog.category : [blog.category],
  }));
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(updatedBlogs);

  let filters = ["market", "aplication", "dog"];

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
  return (
    <>
      <h1>MultiFilter</h1>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active-filter" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`}>
            <p>{item.title}</p>
            <p>
              {Array.isArray(item.categories)
                ? item.categories.join(", ")
                : item.categories}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultiFilter;
