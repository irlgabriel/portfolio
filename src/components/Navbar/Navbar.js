import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  Container
} from "reactstrap";

export default function AppNavbar() {
  const [isOpen, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <Container fluid={true} className="px-0">
      <Navbar color="dark" dark={true} expand="sm">
        <NavbarBrand href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes /> : <FaBars />}</NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/"><NavLink>Intro</NavLink></Link>
            <Link to="/what"><NavLink>What</NavLink></Link>
            <Link to="/who"><NavLink>Who</NavLink></Link>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}
