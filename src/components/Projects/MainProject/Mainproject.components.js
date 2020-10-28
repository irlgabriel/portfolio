import styled from "styled-components";

export const ImageContainer = styled.div`
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 80%;
  margin: 0 auto;
  min-height: 400px;
  max-height: 650px;
  transition: all 0.3s ease;
`;
