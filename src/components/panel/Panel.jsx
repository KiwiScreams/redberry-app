import { useState } from "react";
import "./Panel.css";
const Panel = ({ onHide, showPanel }) => {
  const [isClosing, setIsClosing] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onHide();
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      {showPanel && (
        <div
          className="overlay"
          onAnimationEnd={() => setIsClosing(false)}
        >
          <section className={`auth-panel ${isClosing ? "closing" : ""}`}>
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
