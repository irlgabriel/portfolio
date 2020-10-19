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
} from "reactstrap";

export default function AppNavbar() {
  const [isOpen, setOpen] = useState(false)
  const [currentLocation, setLocation] = useState(useLocation().pathname)
  const toggle = () => {
    setOpen(!isOpen)
  }
  return (
    <div>
      
      <Navbar color="dark" dark={true} expand="sm">
        <NavbarBrand href="#">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle}>{isOpen ? <FaTimes /> : <FaBars />}</NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Link to="/"><NavLink onClick={() => setLocation("/")}>Home</NavLink></Link>
            <Link to="/about"><NavLink onClick={() => setLocation("/about")}>About</NavLink></Link>
            <Link to="/contact"><NavLink onClick={() => setLocation("/contact")}>Contact</NavLink></Link>
            <p>{currentLocation}</p>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
