import "./BlogDetail.css";
import { useParams } from "react-router-dom";
import { blogs } from "../../assets/data/data";
const BlogDetail = () => {
  const { id } = useParams();
  const blogId = parseInt(id, 10);
  const blog = blogs.find((blog) => blog.id === blogId);
  const relatedBlogs = blogs.filter((relatedBlog) => {
    if (relatedBlog.id === blogId) return false;
    return relatedBlog.categories?.includes(blog.category);
  });
  console.log(blog.category);

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
          {blog.category.map((cat) => {
            return <div key={cat}>{cat}</div>
          })}
          <p>{blog.description}</p>
        </div>
      </section>
      {relatedBlogs.length > 0 && (
        <section className="related-blogs">
          <h2>Related Blogs</h2>
          <ul>
            {relatedBlogs.map((relatedBlog) => (
              <li key={relatedBlog.id}>
                {relatedBlog.title}
                koko
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};
export default BlogDetail;
