import styled from "styled-components";

export const ImageContainer = styled.div`
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 60%;
  margin: 0 auto;
  min-height: 300px;
  max-height: 350px;
  transition: all 0.3s ease;
`;
