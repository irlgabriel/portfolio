import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  height: 100%;
`;
