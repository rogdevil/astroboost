import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MobileNav from "./Components/MobileNav";
import { Switch, Route } from "react-router-dom";
import Booster from "./Components/Booster";

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
        <Route path="/faq">
          <h1 className="red" style={{ marginTop: "9em" }}>
            welcome to faq
          </h1>
        </Route>
        <Route path="/login">
          <h1 className="red" style={{ marginTop: "9em" }}>
            welcome to login
          </h1>
        </Route>
        <Route path="/signup">
          <h1 className="red" style={{ marginTop: "9em" }}>
            welcome to signup
          </h1>
        </Route>
        <Route path="/contactus">
          <h1 className="red" style={{ marginTop: "9em" }}>
            welcome to contactus
          </h1>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
