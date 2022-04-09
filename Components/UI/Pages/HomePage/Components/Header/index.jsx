import React from "react";
import classes from "./Header.module.css";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div className={classes.headerRoot}>
      <h1>
        Using <span>learners</span>
      </h1>
    </div>
  );
}

export default Header;
