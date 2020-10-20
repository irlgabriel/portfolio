import React from "react";
import { Zoom } from "react-reveal";
import { 
  Container,

} from "reactstrap"

export default function Contact() {
  return (
    <Container className="text-light px-0" fluid={true} style={{position: "relative", flex: "1"}}>
      <div className="bg-img"></div>
        <Zoom>
          <Container>
            <h2 className="mt-2">Get in touch with me!</h2>
          </Container>
        </Zoom>
    </Container>
  );
}
