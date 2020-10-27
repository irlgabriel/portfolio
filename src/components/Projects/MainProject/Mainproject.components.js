import styled from "styled-components";

export const ImageContainer = styled.div`
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 70%;
  margin: 0 auto;
  min-height: 350px;
  max-height: 400px;
  transition: all 0.3s ease;
`;
