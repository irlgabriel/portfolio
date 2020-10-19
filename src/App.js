import React from "react";
import GlobalStyle from "./globalStyles";
import { HashRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// Components
import { Navbar } from "./components";
import { Home } from "./components";
import { About } from "./components";
import { Contact } from "./components";
import { Footer } from "./components";

function App() {

  return (
    <Router basename="/">
        <GlobalStyle />
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
    </Router>
  );
}

export default App;
