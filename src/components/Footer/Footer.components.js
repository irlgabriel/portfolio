import styled from "styled-components";

export const MainContainer = styled.section`
  padding: 0.75rem;
  border-top: 1px solid white;
  color: white;
  min-height: 100px;
  width: 100%;
  display: flex;
  background: #101522;
  justify-content: space-around;
  align-items: center;

`;

export const ContactInfo = styled.div`

`;
export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
  padding: 0.5rem;
  &:hover {
    color: lightsalmon;
  }
`;

export const ContactHeader = styled.h3``;

export const ContactIcon = styled.span``;

export const ContactLink = styled.a`
  text-decoration: none;
  color: whitesmoke;
`;
