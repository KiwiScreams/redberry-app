import { useNavigate } from "react-router-dom";
import "./AddBlog.css";
const AddBlog = () => {
    const navigate = useNavigate();
    const previewPage = () =>
    {
        navigate("/");
    }
  return (
    <>
      <section className="add-blog-section">
        <button onClick={previewPage}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </section>
    </>
  );
};

export default AddBlog;
