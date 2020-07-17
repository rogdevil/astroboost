import React from 'react';
import { UserOrderContext } from './SelectionCard';

function InitialRankModal() {
    const context = React.useContext(UserOrderContext);

    const assigRankOne = (event) => {
        context.showModalone.set("none");
        context.initialRank.set(event.target.innerText);
    };
    

    return (
        
                <div className="modal" style={{display: context.showModalone.get}} >
                    <div className="league-modal">
                        <div className="league">
                            <img src={require("../../images/firstrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankOne}>Iron 4</p></li>
                                <li><p onClick={assigRankOne}>Iron 3</p></li>
                                <li><p onClick={assigRankOne}>Iron 2</p></li>
                                <li><p onClick={assigRankOne}>Iron 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/secondrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankOne}>Bronze 4</p></li>
                                <li><p onClick={assigRankOne}>Bronze 3</p></li>
                                <li><p onClick={assigRankOne}>Bronze 2</p></li>
                                <li><p onClick={assigRankOne}>Bronze 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/thirdrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankOne}>Silver 4</p></li>
                                <li><p onClick={assigRankOne}>Silver 3</p></li>
                                <li><p onClick={assigRankOne}>Silver 2</p></li>
                                <li><p onClick={assigRankOne}>Silver 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/forthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankOne}>Gold 4</p></li>
                                <li><p onClick={assigRankOne}>Gold 3</p></li>
                                <li><p onClick={assigRankOne}>Gold 2</p></li>
                                <li><p onClick={assigRankOne}>Gold 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/fifthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankOne}>Platinum 4</p></li>
                                <li><p onClick={assigRankOne}>Platinum 3</p></li>
                                <li><p onClick={assigRankOne}>Platinum 2</p></li>
                                <li><p onClick={assigRankOne}>Platinum 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankOne}>Diamond 4</p></li>
                                <li><p onClick={assigRankOne}>Diamond 3</p></li>
                                <li><p onClick={assigRankOne}>Diamond 2</p></li>
                                <li><p onClick={assigRankOne}>Diamond 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={assigRankOne}>Master</p></li>
                            </ul>
                        </div>
                    </div>
                </div>    
        
    )
}

export default InitialRankModal;
