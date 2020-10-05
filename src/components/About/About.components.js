import styled from "styled-components"

export const Container = styled.div`
  padding: 1rem;
  margin-bottom: auto;
  min-height: 70vh;
`

export const Heading = styled.h1`
  width: 100%;
`

export const InfoColumn = styled.section`
  margin-top: 1.5rem;
  margin-right: auto;
  padding: 2rem .5rem;
  max-width: 60%;
  background: whitesmoke;
  border-radius: 5px;

  &:nth-child(odd) {
    margin-right: 0;
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    margin: 1.5rem 0 0 0;
    max-width: 100%;

  }
`

export const Content = styled.div`

`

export const Para = styled.p`
  margin-top: .5rem;
`