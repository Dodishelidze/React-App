import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onShow, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color="blue"
          text={showAddTask == true ? "Close" : "Add"}
          onClick={onShow}
        ></Button>
      )}
    </header>
  );
};

export default Header;
