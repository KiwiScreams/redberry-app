import { NavLink } from "react-router-dom";
import redberryLogo from "../../../assets/images/redberry.svg";
import "./Header.css";
import { useState } from "react";
import Panel from "../../panel/Panel";
const Header = () => {
  const [showPanel, setShowPanel] = useState(false);

  const handlePanelShow = () => {
    setShowPanel(true);
  };

  const handlePanelHide = () => {
    setShowPanel(false);
  };

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <img src={redberryLogo} alt="" />
          </NavLink>
          <button onClick={handlePanelShow}>შესვლა</button>
        </nav>
      </header>
      <Panel showPanel={showPanel} onHide={handlePanelHide} />
    </>
  );
};

export default Header;
