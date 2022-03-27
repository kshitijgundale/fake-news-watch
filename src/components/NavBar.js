import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Title from "./Title"

const NavBar = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="d-flex flex-row">
          <Title fontSize="30px" color="red">F</Title>
          <Title fontSize="30px" color="blue">ake</Title>
          <Title fontSize="30px" color="red">N</Title>
          <Title fontSize="30px" color="blue">ews</Title>
          <Title fontSize="30px" color="red">W</Title>
          <Title fontSize="30px" color="blue">atch</Title>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default NavBar;