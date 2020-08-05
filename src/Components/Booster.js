import React from "react";
import { Link } from "react-router-dom";
import { SelectionCard } from "./Booster Page/SelectionCard";
import { Switch, Route } from "react-router-dom";

const Booster = (props) => {
  return (
    <div className="boosting-page animatorFade">
      <div className="boosting-heading">
        <ul>
          <li>
            <Link to="/boosting/solo">Solo Normal</Link>
          </li>
          <li>
            <Link to="/boosting/solo/netwin">Solo Net Wins</Link>
          </li>
          <li>
            <Link to="/boosting/duo">Duo Normal</Link>
          </li>
          <li>
            <Link to="/boosting/duo/netwin">Duo Net Wins</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/boosting/duo">
          <h2 className="booster-heading-big-text">DUO DIVISIONS</h2>
        </Route>
        <Route exact path="/boosting/solo">
          <h2 className="booster-heading-big-text">SOLO DIVISIONS</h2>
        </Route>
        <Route exact path="/boosting/solo/netwin">
          <h2 className="booster-heading-big-text">SOLO NETWIN DIVISIONS</h2>
        </Route>
        <Route exact path="/boosting/duo/netwin">
          <h2 className="booster-heading-big-text">DUO NETWIN DIVISIONS</h2>
        </Route>
      </Switch>
      <p className="red booster-heading-small-text">
        Guaranteed Division you desire, with the Booster playing in your
        account.
      </p>
      <div className="Booster-content">
        <SelectionCard />
      </div>
    </div>
  );
};

export default Booster;
