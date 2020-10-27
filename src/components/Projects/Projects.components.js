import styled from "styled-components";
import { Col } from "reactstrap";

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
`;

export const ImageContainer = styled.div`
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  max-height: 100%;
  margin: 0 auto;

  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  max-width: 400px;
  height: 300px;
`;
