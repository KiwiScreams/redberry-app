import { useState } from "react";
import "./Panel.css";
const Panel = ({ onHide, showPanel }) => {
  const handleClose = () => {
    onHide();
  };

  return (
    <>
      {showPanel && (
        <div className="overlay">
          <section className="auth-panel">
            <button className="x" onClick={handleClose}>
              <i className="fa-solid fa-x"></i>
            </button>
            <h3>შესვლა</h3>
            <label htmlFor="email">ელ-ფოსტა</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Example@redberry.ge"
            />
            <button className="submit">შესვლა</button>
          </section>
        </div>
      )}
    </>
  );
};

export default Panel;
