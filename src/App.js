import React from "react";
import GlobalStyle from "./globalStyles";
import {
  HashRouter as Router,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


// Components
import { Container } from "reactstrap"
import { Navbar, Projects, Footer, Intro, Me } from "./components";


function App() {

  return (
    <Router basename="/">
      <Container fluid={true} className='px-0 bg-dark'>
        <GlobalStyle />
        <Navbar />
        <Route path="/what" exact component={Projects} />
        <Route path="/" exact component={Intro} />
        <Route path="/who" exact component={Me}/>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
