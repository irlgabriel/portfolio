import React from "react";
import { contacts } from "./Data";

import { Container, ListGroup, ListGroupItem } from "reactstrap";

export default function Footer() {
  return (
    <Container fluid={true}>
      <ListGroup id="footer" horizontal="xs" className="mx-auto">
        {contacts.map((obj, index) => (
          <ListGroupItem
            key={index}
            style={{
              fontSize: "3rem",
              color: obj.color,
              background: "transparent",
            }}
            className="footer-item text-center py-1 px-0"
            tag="a"
            href={obj.contactLink}
            action
          >
            {obj.icon}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}
