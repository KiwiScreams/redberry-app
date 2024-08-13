import { useNavigate } from "react-router-dom";
import { useState } from "react";
import folderAddImage from "../../assets/images/folder-add.svg";
import "./AddBlog.css";
const AddBlog = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const previewPage = () => {
    navigate("/");
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
  };
  return (
    <>
      <section className="add-blog-section">
        <button onClick={previewPage}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <form>
          <div className="add-blog-container">
            <h1>ბლოგის დამატება</h1>
            <div
              className="image-upload-container"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <label>ატვირთეთ ფოტო</label>
              <label
                className="image-upload-area"
                style={{
                  backgroundImage: selectedImage
                    ? `url(${URL.createObjectURL(selectedImage)})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <input
                  className="upload-box-content"
                  type="file"
                  hidden
                  onChange={handleImageChange}
                />
                {!selectedImage ? (
                  <div className="img-view">
                    <img src={folderAddImage} alt="" />
                    <p>
                      ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
                    </p>
                  </div>
                ) : null}
              </label>
            </div>
          </div>
          
        </form>
      </section>
    </>
  );
};

export default AddBlog;
