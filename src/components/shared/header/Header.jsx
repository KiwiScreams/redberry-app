import { NavLink, useLocation, useNavigate } from "react-router-dom";
import redberryLogo from "../../../assets/images/redberry.svg";
import "./Header.css";
import { useState, useEffect } from "react";
import Panel from "../../panel/Panel";
const Header = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setIsSubmitted(true);
    }
  }, []);
  const handlePanelShow = () => {
    setShowPanel(true);
  };

  const handlePanelHide = () => {
    setShowPanel(false);
  };

  const handlePanelSubmit = () => {
    setIsSubmitted(true);
    localStorage.setItem("isLoggedIn", true);
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
          <NavLink
            to="/"
            style={
              location.pathname === "/add-blog"
                ? { margin: "auto", display: "block" }
                : {}
            }
          >
            <img src={redberryLogo} alt="" />
          </NavLink>
          {location.pathname !== "/add-blog" &&
            (isSubmitted ? (
              <button onClick={addBlogPageNavigate}>დაამატე ბლოგი</button>
            ) : showPanel ? null : (
              <button
                onClick={() => {
                  handlePanelShow();
                }}
              >
                შესვლა
              </button>
            ))}
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
