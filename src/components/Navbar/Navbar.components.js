import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaFirstOrderAlt } from 'react-icons/fa'

export const NavContainer = styled.section`
  height: 80px;
  background: #101522;
  color: white;
`

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  z-index: 2;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`

export const NavItem = styled.li`
  margin: 0 10px;
  
  @media screen and (max-width: 960px) {
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid lightgray;
  }
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.5 ease;
  &:hover {
    color: lightcoral;
  }
`

export const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLogo = styled.div`
  position: absolute;
  height: 80px;
  top: 0;
  left: 20px;
  display: flex;
  align-items: center;
`

export const NavBrand = styled(FaFirstOrderAlt)`
  transform: scale(1.3);
`