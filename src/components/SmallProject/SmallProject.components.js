import styled from "styled-components";

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({img}) => (`url(${img})`)};
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  z-index: -2;
  
`
export const ProjectContainer = styled.div`
  position: relative;
  width: 150px;
  height: 75px;
  display: inline-block;
  border-radius: 8px !important;
  margin: .25rem;
  h5 {
    margin-bottom: 0;
  }
`