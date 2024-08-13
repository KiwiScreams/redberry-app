import { useNavigate } from "react-router-dom";
import { useState } from "react";
import folderAddImage from "../../assets/images/folder-add.svg";
import "./AddBlog.css";
const AddBlog = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const previewPage = () => {
    navigate("/");
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };
  return (
    <>
      <section className="add-blog-section">
        <button onClick={previewPage}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div className="add-blog-container">
          <h1>ბლოგის დამატება</h1>
          <div className="image-upload-container">
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
      </section>
    </>
  );
};

export default AddBlog;