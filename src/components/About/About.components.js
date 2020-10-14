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
  margin-left: 1rem;
  max-width: 40%; 
  &:nth-child(odd) {
    margin-right: 0;
    margin-left: auto;
  }
`

export const Content = styled.div`

`

export const Para = styled.p`
  font-size: 1.2rem;
`

export const ImageContainer = styled.div`
  background-image: url(${({src}) => (src)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 250px;
  height: 300px;

  &:hover {
    transform: scale(1.02);
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  background: whitesmoke;
  border-radius: 5px;
  padding: 1.3rem .5rem;

`