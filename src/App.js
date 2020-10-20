import React from "react";
import GlobalStyle from "./globalStyles";
import "bootstrap/dist/css/bootstrap.min.css"

// Components
import { Container } from "reactstrap"
import { Navbar, Home, Footer } from "./components";


function App() {

  return (
    <Container fluid={true} className="px-0">
        <GlobalStyle />
        <Navbar />
        <Home />
        <Footer />
    </Container>
  );
}

export default App;
