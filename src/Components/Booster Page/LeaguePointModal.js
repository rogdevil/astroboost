import React from 'react';
import { UserOrderContext } from './SelectionCard';

function LeaguePointModal() {
    const context = React.useContext(UserOrderContext);

    const assignLeaguePoint = (event) => {
        context.showModalLeaguePoint.set("none");
        context.leaguePoint.set(event.target.innerText);
    };
    
    return (
                <div className="modal" style={{display: context.showModalLeaguePoint.get}}>
                    <div className="league-point-modal">
                        <h2>Select Your league Points</h2>
                        <div className="points">
                            <p onClick={assignLeaguePoint}>0-20</p>
                            <p onClick={assignLeaguePoint}>21-40</p>
                            <p onClick={assignLeaguePoint}>41-60</p>
                            <p onClick={assignLeaguePoint}>61-80</p>
                            <p onClick={assignLeaguePoint}>81-99</p>
                            <p onClick={assignLeaguePoint}>100</p>
                        </div>
                    </div>
                </div>
    )
}

export default LeaguePointModal;
