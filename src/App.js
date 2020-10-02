import React from 'react';
import GlobalStyle, { MainContainer } from './globalStyles'
import { HashRouter as Router, Route } from 'react-router-dom'

// Components
import { Navbar } from "./components"
import { Home } from "./components"

function App() {
  return (
    <Router basename='/'>
      <MainContainer>
        <GlobalStyle />
        <Navbar />
        <Route to='/' exact component={Home}/>
      </MainContainer>
    </Router>
  );
}

export default App;
