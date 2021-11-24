import React from "react";
import { Link } from "react-router-dom";
import img from "../../../img/checklogo.png";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light" id="header1">
      <div className="container-fluid">
        <Link className="navbar-brand logotodo" to="/">
          <img
            src={img}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          To Do
        </Link>
        <Link className="navbar-brand flex-end buttonsH" to="/add">
          New Task
        </Link>
      </div>
    </nav>
  );
};

export default Header;
