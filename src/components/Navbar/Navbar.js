import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
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
  const [currentLocation, setLocation] = useState(useLocation().pathname)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <Container fluid={true} className="px-0">
      <Navbar color="dark" dark={true} expand="sm">
        <NavbarBrand href="#">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes /> : <FaBars />}</NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/"><NavLink active={currentLocation === '/'} onClick={() => setLocation("/")}>Home</NavLink></Link>
            <Link to="/about"><NavLink active={currentLocation === '/about'} onClick={() => setLocation("/about")}>About</NavLink></Link>
            <Link to="/contact"><NavLink active={currentLocation === '/contact'} onClick={() => setLocation("/contact")}>Contact</NavLink></Link>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}
