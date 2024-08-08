import { useEffect, useState } from "react";
import { blogs } from "../../assets/data/data";
import "./MultiFilter.css";
const MultiFilter = () => {
  const updatedBlogs = blogs.map((blog) => ({
    ...blog,
    categories: Array.isArray(blog.category) ? blog.category : [blog.category],
  }));
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(updatedBlogs);

  let filters = [
    { category: "Market", label: "მარკეტი" },
    { category: "Aplication", label: "აპლიკაცია" },
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
  return (
    <>
      <div className="buttons-container">
        {filters.map((filter, idx) => (
          <button
            onClick={() => handleFilterButtonClick(filter.category)}
            className={`button ${
              selectedFilters?.includes(filter.category) ? "active-filter" : ""
            }`}
            key={`filters-${idx}`}
          >
            {filter.label}
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
