import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {Link} from "react-router-dom"
import Title from "./Title"

const NavBar = () => (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration:'none'}} className="d-flex flex-row">
            <Title fontSize="30px" color="red">F</Title>
            <Title fontSize="30px" color="blue">ake</Title>
            <Title fontSize="30px" color="red">N</Title>
            <Title fontSize="30px" color="blue">ews</Title>
            <Title fontSize="30px" color="red">W</Title>
            <Title fontSize="30px" color="blue">atch</Title>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link" style={{ textDecoration:'none'}}>Home</Link>
            <Link to="/howitworks" className="nav-link" style={{ textDecoration:'none'}}>HowItWorks</Link>
            <Link to="/predict" className="nav-link" style={{ textDecoration:'none'}}>GetStarted</Link>
            <Link to="/settings" className="nav-link" style={{ textDecoration:'none'}}>Settings</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default NavBar;