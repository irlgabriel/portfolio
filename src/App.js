import React from 'react';
import GlobalStyle, { MainContainer } from './globalStyles'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import { Navbar } from "./components"
import { Home } from "./components"
import { About } from "./components"
import { Contact } from "./components"

function App() {
  return (
    <Router basename='/'>
      <MainContainer>
        <GlobalStyle />
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </MainContainer>
    </Router>
  );
}

export default App;
