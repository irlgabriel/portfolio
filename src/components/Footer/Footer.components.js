import styled from "styled-components"

export const MainContainer = styled.section`
  padding: 1.5rem;
  border-top: 1px solid white;
  color: white;
  min-height: 100px;
  width: 100%;
  display: flex;
  background: #101522;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width:960px) {
    flex-direction: column;
  }
`

export const ContactInfo = styled.div`
 
  @media screen and (max-width: 960px) {
    margin-bottom: 1rem;
  }
`
export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
`

export const ContactHeader = styled.h3`

`

export const ContactIcon = styled.span`

`

export const ContactLink = styled.a`
  text-decoration: none;
  color: whitesmoke;
`