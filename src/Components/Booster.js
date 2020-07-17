import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Solo from './Booster/Solo';
import Duo from './Booster/Duo';

const Booster = (props) => {
    
        return (
            <div className="boosting-page">
                <div className="boosting-heading">
                    <ul>
                        <li>
                            <Link to="/boosting/solo">Solo</Link>
                        </li>
                        <li>
                            <Link to="/boosting/Duo">Duo</Link>
                        </li>
                    </ul>
                </div>
                <div className="Booster-content">
                    <Switch>
                        <Route exact path="/boosting/duo">
                            <Duo />
                        </Route>
                        <Route exact path="/boosting/solo">
                            <Solo />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
}

export default Booster
