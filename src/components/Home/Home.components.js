import styled from 'styled-components'

export const Project = styled.section`
  display: flex;
  width: 100%;
  height: 90vh;
  background-color: white;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

