import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  font-family: "Press Start 2P", "Roboto", cursive;
  font-size: 1.5rem;
  color: lightgray;
  transition: all 0.4s ease;
  &:hover {
    text-decoration: none;
    color: royalblue;
  }
`;
