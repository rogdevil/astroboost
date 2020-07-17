import React from 'react';
import {UserOrderContext} from './SelectionCard';

function FinalRankModal() {
    const context = React.useContext(UserOrderContext);

    const assigRankTwo = (event) => {
        context.showModaltwo.set("none");
        context.destinedRank.set(event.target.innerText);
    };
    
    return (
                <div className="modal" style={{display: context.showModaltwo.get}} >
                    <div className="league-modal">
                        <div className="league">
                            <img src={require("../../images/firstrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>Iron 4</p></li>
                                <li><p onClick={assigRankTwo}>Iron 3</p></li>
                                <li><p onClick={assigRankTwo}>Iron 2</p></li>
                                <li><p onClick={assigRankTwo}>Iron 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/secondrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>Bronze 4</p></li>
                                <li><p onClick={assigRankTwo}>Bronze 3</p></li>
                                <li><p onClick={assigRankTwo}>Bronze 2</p></li>
                                <li><p onClick={assigRankTwo}>Bronze 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/thirdrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>Silver 4</p></li>
                                <li><p onClick={assigRankTwo}>Silver 3</p></li>
                                <li><p onClick={assigRankTwo}>Silver 2</p></li>
                                <li><p onClick={assigRankTwo}>Silver 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/forthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>Gold 4</p></li>
                                <li><p onClick={assigRankTwo}>Gold 3</p></li>
                                <li><p onClick={assigRankTwo}>Gold 2</p></li>
                                <li><p onClick={assigRankTwo}>Gold 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/fifthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>Platinum 4</p></li>
                                <li><p onClick={assigRankTwo}>Platinum 3</p></li>
                                <li><p onClick={assigRankTwo}>Platinum 2</p></li>
                                <li><p onClick={assigRankTwo}>Platinum 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>Diamond 4</p></li>
                                <li><p onClick={assigRankTwo}>Diamond 3</p></li>
                                <li><p onClick={assigRankTwo}>Diamond 2</p></li>
                                <li><p onClick={assigRankTwo}>Diamond 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>Master</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/seventhrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankTwo}>GrandMaster</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
}

export default FinalRankModal;
