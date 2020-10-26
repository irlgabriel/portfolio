import React from "react";
import {
  Container
} from "reactstrap";

export default () => {
  return(
    <Container fluid style={{minHeight: "100vh"}}> 
      <Container fluid style={{border: "1px solid red", position: "relative"}}>
      </Container>
    </Container>
  )
}