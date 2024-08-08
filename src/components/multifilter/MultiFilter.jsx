import { useEffect, useState } from "react";
import { blogs } from "../../assets/data/data";

const MultiFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(blogs);
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
      const filteredItems = selectedFilters.reduce((acc, selectedCategory) => {
        const filteredBlogs = blogs.filter(
          (blog) => blog.category === selectedCategory
        );
        return [...acc, ...filteredBlogs];
      }, []);
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems([...blogs]);
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
        {filteredItems.map((item, idx) => {
          return (
            <div key={`items-${idx}`}>
              <p>{item.title}</p>
              <p>{item.category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultiFilter;
