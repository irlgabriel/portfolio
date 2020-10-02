import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding-top: 15px;
  width: 100%;
  min-height: 90vh;
  display: flex;
  background-color: ${({bgColor}) => (bgColor)};
  color: ${({textColor}) => (textColor)};
  flex-direction: ${({imageLeft}) => (!imageLeft ? "row" : "row-reverse")};
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  flex: 1;
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
  width: 555px;
  display: flex;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`

export const Image = styled.img`
  width: 100%;
  max-height: 350px;
`
export const ProjectHeader = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
`
export const TopLine = styled.h3`
  
`

export const ProjectLink = styled.a`
  margin-left: 15px;
  padding: 5px 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  color: ${({bgColor}) => (bgColor !== "#101522" ? "white" : "#101522")};
  background: ${({bgColor}) => (bgColor === "#101522" ? "white" : "#101522")};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({bgColor}) => (bgColor === "#101522" ? "white" : "#101522")};
    background: lightcoral;
  }
`

export const Heading = styled.p`
  font-size: 1.2rem;
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
  transition: all 0.3s ease-in-out;

  &:hover {
    background: lightcoral;
  }
`

export const Features = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`