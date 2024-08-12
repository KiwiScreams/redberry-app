import { NavLink, useNavigate } from "react-router-dom";
import redberryLogo from "../../../assets/images/redberry.svg";
import "./Header.css";
import { useState } from "react";
import Panel from "../../panel/Panel";
import { useEffect } from "react";
import { useCallback } from "react";
const Header = ({ handleSubmit }) => {
  const [showPanel, setShowPanel] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handlePanelShow = () => {
    setShowPanel(true);
  };

  const handlePanelHide = () => {
    setShowPanel(false);
  };

  const handlePanelSubmit = () => {
    setIsSubmitted(true);
  };

  const addBlogPageNavigate = () => {
    if (isSubmitted) {
      navigate("/add-blog");
    }
  };
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <img src={redberryLogo} alt="" />
          </NavLink>
          {isSubmitted ? (
            <button onClick={addBlogPageNavigate}>დაამატე ბლოგი</button>
          ) : (
            <button
              onClick={() => {
                handlePanelShow();
                handleSubmit();
              }}
            >
              შესვლა
            </button>
          )}
        </nav>
      </header>
      <Panel
        showPanel={showPanel}
        onHide={handlePanelHide}
        onPanelSubmit={handlePanelSubmit}
      />
    </>
  );
};

export default Header;
