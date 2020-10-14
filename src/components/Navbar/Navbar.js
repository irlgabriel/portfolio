import React, { useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa";
import {
  NavContainer,
  Nav,
  NavMenu,
  NavItem,
  NavLink,
  MobileMenu,
  NavLogo,
  NavBrand
} from "./Navbar.components"

export default function Navbar() {
  const [mobile, setMobile] = useState(true);
  const [click, setClick] = useState(false);
  const [currentPage, setPage] = useState("Home");

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const toggleClick = () => {
    setClick(!click);
  }

  const closeMobileMenu = () => {
    setClick(false);
  }

  window.addEventListener("resize", showButton);

  return(
    <NavContainer>
      <Nav>
        <NavLogo>
          <NavLink to="/">
            <NavBrand />
          </NavLink>
        </NavLogo>
        {mobile && 
          <MobileMenu onClick={toggleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileMenu>
        }
        <NavMenu click={click}>
          <NavItem onClick={closeMobileMenu}>
            <NavLink to="/">Projects</NavLink>
          </NavItem>
          <NavItem onClick={closeMobileMenu}>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
          <NavItem onClick={closeMobileMenu}>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </NavMenu>
      </Nav>
    </NavContainer>
  )
}