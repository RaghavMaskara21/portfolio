import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
function Header() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" sticky="top" className="fs-4">
        <Container>
        <Navbar.Brand href="#Home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          RAGHAV MASKARA</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link href="#About" className="mx-2">About</Nav.Link>
              <Nav.Link href="#Experience" className="mx-2">Experience</Nav.Link>
              <Nav.Link href="#Projects" className="mx-2">Projects</Nav.Link>
              <Nav.Link href="#Contact" className="mx-2">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
