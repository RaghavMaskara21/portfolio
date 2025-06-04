import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../images/logo2.png";
import './Header.css'
function Header() {
  return (
    <div>
      <Navbar variant="dark" expand="lg" fixed="top" className="fs-4">
        <Container>
        
          <img
            alt=""
            src={logo}
            width="90"
            height="40"
            className="d-inline-block align-top mylogo"
          />{" "}
          {/* <Navbar.Brand href="#Home">
          RAGHAV MASKARA</Navbar.Brand> */}
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav >
            <Nav.Link href="#Home" className="mx-2">Home</Nav.Link>
              <Nav.Link href="#About" className="mx-2">About</Nav.Link>
              <Nav.Link href="#Skills" className="mx-2">Skills</Nav.Link>
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
