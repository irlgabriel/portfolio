import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  padding: .5rem;
  border-radius: 2px;
  font-size: 1.5rem;
  color: black;
  padding: .5rem;
  border: 1px solid red;
  &:hover {
    text-decoration: none;
    color: darkslategray;
  }
`