import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding-top: 15px;
  width: 100%;
  min-height: 50vh;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: center;  
  background-color: ${({bgColor}) => (bgColor)};
  flex-direction: ${({imageLeft}) => (!imageLeft ? "row" : "row-reverse")}; 
  color: ${({textColor}) => (textColor)};
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  margin: 0 15px;
  width: 550px;

  &:first-of-type {
    flex-basis: 40%;
  }

  &:last-of-type {
    flex-basis: 60%;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    max-width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  height: 400px;
  transition: all 0.3s ease-in-out;

`
export const Image = styled.img`
  height: 100%;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 960px) {
    padding: 30px 0;
  }
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
  font-weight: bold;
  margin-left: 15px;
  padding: 5px 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  color: ${({bgColor}) => (bgColor !== "#101522" ? "white" : "lightsalmon")};
  background: ${({bgColor}) => (bgColor === "#101522" ? "white" : "lightsalmon")};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({bgColor}) => (bgColor !== "#101522" ? "white" : "white")};
    background: ${({bgColor}) => (bgColor === "#101522" ? "lightsalmon" : "#101522")};
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
    background: lightsalmon;
    transform: scale(1.05); 
  }
`

export const Features = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`

export const ProjectIcon = styled.span`
  margin-right: .75rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${({color}) => (color)};
`