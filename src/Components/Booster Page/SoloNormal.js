import React, {useContext} from 'react';
import { UserOrderContext } from './SelectionCard';

function SoloNormal() {
    const context = useContext(UserOrderContext);

    const toogleModelQueue = (event) => {
        event.preventDefault();
        if (context.queueModal.get === "block") {
            context.queueModal.set("none");
        } else {
            context.queueModal.set("block");
        }
    };
    
    const toogleModelone = (event) => {
        event.preventDefault();
        if (context.showModalone.get === "block") {
            context.showModalone.set("none");
        } else {
            context.showModalone.set("block");
        }
    };
    
    const toogleServerModal = (event) => {
        event.preventDefault();
        if (context.showServerModal.get === "block") {
            context.showServerModal.set("none");
        } else {
            context.showServerModal.set("block");
        }
    };

    const toogleModeltwo = (event) => {
        event.preventDefault();
        if (context.showModaltwo.get === "block") {
            context.showModaltwo.set("none");
        } else {
            context.showModaltwo.set("block");
        }
    };
    
    const toogleModelLeaguePoint = (event) => {
        event.preventDefault();
        if (context.showModalLeaguePoint.get === "block") {
            context.showModalLeaguePoint.set("none");
        } else {
            context.showModalLeaguePoint.set("block");
        }    
    };
    return (
        <React.Fragment>
                    <div className="selection-card" id="base" >
                        <img src={context.initialImage.get} alt="rank-card" />
                        <div className="rank">
                        <p className="rank-name" onClick={toogleModelone}>Rank</p>
                        <p className="rank-tier">{context.initialRank.get}</p>
                        </div>
                        <div className="rank">
                            <p className="rank-name" onClick={toogleModelQueue}>Queue</p>
                            <p className="rank-tier">{context.queueName.get}</p>
                        </div>
                        <div className="server-lp">
                            <div>
                            <p className="rank-name" onClick={toogleServerModal} >Server</p>
                            <p className="rank-tier">{context.server.get}</p>  
                            </div>
                            <div>
                            <p className="rank-name" onClick={toogleModelLeaguePoint}>League Point</p>
                            <p className="rank-tier">{context.leaguePoint.get}</p>
                            </div>
                        </div>
                    </div>

                    <div className="selection-card" id="destination">
                        <img src={context.destinedImage.get} alt="rank-card" />
                        <div className="rank">
                        <p className="rank-name" onClick={toogleModeltwo}>Rank</p>
                        <p className="rank-tier">{context.destinedRank.get}</p>
                        </div>
                        <div className="average-time-to-boost">
                            <div>
                            <p className="rank-name">Master/Challenger Booster</p>
                            <p className="rank-tier">ready in 5 min</p>  
                            </div>
                            <div>
                            <p className="rank-name">Average Time</p>
                            <p className="rank-tier">2 days</p>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default SoloNormal;
