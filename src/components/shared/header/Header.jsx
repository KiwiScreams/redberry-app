import { NavLink } from "react-router-dom";
import redberryLogo from "../../../assets/images/redberry.svg";
import "./Header.css";
import { useState } from "react";
import Panel from "../../panel/Panel";
import { useEffect } from "react";
import { useCallback } from "react";
const Header = ({handleSubmit}) => {
  const [showPanel, setShowPanel] = useState(false);
  const [isSubmited, setIsSubmitted] = useState(false);
  const [buttonText, setButtonText] = useState("შესვლა");
  const handlePanelShow = () => {
    setShowPanel(true);
  };

  const handlePanelHide = () => {
    setShowPanel(false);
  };
  const handlePanelSubmit = () => {
    setButtonText("დაამატე ბლოგი");
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <img src={redberryLogo} alt="" />
          </NavLink>
          <button
            onClick={() => {
              handlePanelShow();
              handleSubmit();
            }}
          >
            {buttonText}
          </button>
        </nav>
      </header>
      <Panel showPanel={showPanel} onHide={handlePanelHide} onPanelSubmit={handlePanelSubmit}/>
    </>
  );
};

export default Header;
