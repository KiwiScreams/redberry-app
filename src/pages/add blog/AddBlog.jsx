import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { UlComponent } from "../../assets/style/Ul";
import folderAddImage from "../../assets/images/folder-add.svg";
import "./AddBlog.css";
const AddBlog = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const previewPage = () => {
    navigate("/");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      localStorage.setItem("imageData", imageDataUrl);
      setImageData(imageDataUrl);
    };
    reader.readAsDataURL(file);
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

    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      localStorage.setItem("imageData", imageDataUrl);
      setImageData(imageDataUrl);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const storedImageData = localStorage.getItem("imageData");
    if (storedImageData) {
      setImageData(storedImageData);
      setSelectedImage(null);
    }
  }, []);

  useEffect(() => {
    if (imageData) {
      setImageUploaded(true);
    }
  }, [imageData]);

  return (
    <>
      <section className="add-blog-section">
        <button onClick={previewPage} className="preview">
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
                  backgroundImage: imageData ? `url(${imageData})` : "none",
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
                {!imageUploaded ? (
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
          <div className="form-container">
            <div className="flex-input-container">
              <div className="input-container">
                <label htmlFor="author">ავტორი*</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  placeholder="შეიყვანეთ ავტორი"
                />
                <UlComponent>
                  <li>მინიმუმ 4 სიმბოლო</li>
                  <li>მინიმუმ ორი სიტყვა</li>
                  <li>მხოლოდ ქართული სიმბოლოები</li>
                </UlComponent>
              </div>
              <div className="input-container">
                <label htmlFor="title">სათაური*</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="შეიყვანეთ სათაური"
                />
                <UlComponent>
                  <li>მინიმუმ 2 სიმბოლო</li>
                </UlComponent>
              </div>
            </div>
            <div className="input-container">
              <label>აღწერა*</label>
              <textarea placeholder="შეიყვანეთ აღწერა"></textarea>
              <UlComponent>
                <li>მინიმუმ ორი სიმბოლო</li>
              </UlComponent>
            </div>
            <div className="flex-input-container">
              <div className="input-container">
                <label htmlFor="date">გამოქვეყნების თარიღი*</label>
                <input
                  type="text"
                  name="title"
                  id="date"
                  placeholder="შეიყვანეთ აღწერა"
                />
              </div>

              <div className="input-container">
                <label htmlFor="category">კატეგორია</label>
                <div className="custom-select">
                  <select>
                    <option value="">შეიყვანეთ სათაური</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>
                  <span className="select-arrow"></span>
                </div>
              </div>
            </div>
            <div className="flex-input-container">
              <div className="input-container">
                <label htmlFor="email">ელ-ფოსტა</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Example@redberry.ge"
                />
              </div>
              <button disabled>გამოქვეყნება</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddBlog;
