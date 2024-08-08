import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import { blogs } from "../../assets/data/data";
const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }
  return (
    <>
      <div className="blog-detail">
        <h1>{blog.title}</h1>
        <p>Author: {blog.author}</p>
        <p>Date: {blog.date}</p>
        {/* <p>Categories: {blog.categories.join(", ")}</p> */}
        <p>{blog.description}</p>
      </div>
    </>
  );
};
export default BlogDetail;
