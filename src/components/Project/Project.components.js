import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding-top: 15px;
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: ${({bgColor}) => (bgColor)};
  color: ${({textColor}) => (textColor)};
  flex-direction: ${({imageLeft}) => (!imageLeft ? "row" : "row-reverse")};

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  box-shadow: ${({bgColor}) => (bgColor === "white" ? "0 0 10px" : "0 0 10px white")};
  min-width: 350px;
  max-width: 555px;
  display: flex;
  transition: all 0.5s ease-in-out;
  
  &:hover {
    transform: scale(1.02);
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const Image = styled.img`
  width: 100%;
  max-height: 350px;
`

export const TopLine = styled.h3`

`
export const Heading = styled.p`

`

export const Subtitle = styled.p`

`

export const SubtitleItem = styled.div`
  cursor: default;
  user-select: none;
  display: inline-block;
  margin: 5px 5px 5px 0px;
  background: lightslategrey;
  padding: 5px;
  border-radius: 5px;
  &:hover {

  }
`

export const Features = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`