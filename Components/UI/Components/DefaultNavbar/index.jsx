import React from "react";
import classes from "./DefaultNavbar.module.css";
import { Nav, Container, Navbar, NavDropdown, Button } from "react-bootstrap";

function DefaultNavbar() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="/" className={classes.navHeading}>
          <img
            className={classes.navLogo}
            src="https://befikracommunity.in/wp-content/uploads/2022/01/cropped-Befikra-removebg-preview-1.png"
            alt=""
          />{" "}
          Befikra
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-end"
            style={{ marginRight: "5px !important", marginLeft: "auto" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
            <NavDropdown title="Teachers" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/teachers/java">Java</NavDropdown.Item>
              <NavDropdown.Item href="/teachers/python">
                Python
              </NavDropdown.Item>
              <NavDropdown.Item href="/teachers/Cpp">C++</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
          <Button type="primary" href="/login">
            Login/Register
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default DefaultNavbar;
