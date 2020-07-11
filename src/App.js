import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import MobileNav from './Components/MobileNav'
import { Switch, Route } from 'react-router-dom'
import Booster from './Components/Booster';


function App() {
  return (
    <React.Fragment>
        <Navbar />
        <MobileNav />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/boosting">
              <Booster />
            </Route>
        </Switch>
      </React.Fragment>
  );
}

export default App;
