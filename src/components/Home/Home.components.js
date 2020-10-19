import styled from "styled-components";
import { Col } from "reactstrap"

export const Intro = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const Heading = styled.h1`
  width: 95%;
  text-align: center;
  font-size: 2rem;
  color: lightsalmon;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid lightgray;
`;

export const Sidebar = styled(Col)`
  height: 100% !important;
`