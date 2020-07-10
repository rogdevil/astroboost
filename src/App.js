import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact'
import MobileNav from './Components/MobileNav'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <MobileNav />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
      </React.Fragment>
  );
}

export default App;
