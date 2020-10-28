import styled from "styled-components";
import { Container } from "reactstrap";

export const Cont = styled(Container)`
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
`;
