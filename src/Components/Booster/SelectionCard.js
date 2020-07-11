import React, { Component } from 'react'
import firstrank from "../../images/firstrank.png"
import secondrank from "../../images/secondrank.png"
import thirdrank from "../../images/thirdrank.png"
import forthrank from "../../images/forthrank.png"
import fifthrank from "../../images/fifthrank.png"
import sixthrank from "../../images/sixthrank.png"
import seventhrank from "../../images/seventhrank.png"
import eightrank from "../../images/eightrank.png"

class SelectionCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
             showModalone: "none",
             showModaltwo: "none",
             initialRank: "Iron 1",
             destinedRank: "Silver 1",
             server: "NA",
             showServerModal: "none",
             showModalLeaguePoint: "none",
             initialImage: firstrank,
             destinedImage: secondrank,
             leaguePoint: "0-20",
             tooglewarning: "none",
             images: {"Iron":"../../images/firstrank.png", "Bronze":"../../images/secondrank.png", "Silver":"../../images/thirdrank.png", "Gold":"../../images/forthrank.png", "Platinum":"../../images/fifthrank.png", "Diamond":"../../images/sixthrank.png", "Master":"../../images/seventhrank.png", "GrandMaster":"../../images/eightrank.png"},
             rankOrder: ["Iron 4", "Iron 3", "Iron 2", "Iron 1", "Bronze 4", "Bronze 3", "Bronze 2", "Bronze 1", "Silver 4", "Silver 3", "Silver 2", "Silver 1", "Gold 4", "Gold 3", "Gold 2", "Gold 1", "Platinum 4", "Platinum 3", "Platinum 2", "Platinum 1", "Diamond 4", "Diamond 3", "Diamond 2", "Diamond 1", "Master", "GrandMaster"]
        }

        this.toogleModelone = this.toogleModelone.bind(this);
        this.toogleModeltwo = this.toogleModeltwo.bind(this);
        this.assigRankOne = this.assigRankOne.bind(this);
        this.assigRankTwo = this.assigRankTwo.bind(this);
        this.assignServer = this.assignServer.bind(this);
        this.toogleServerModal = this.toogleServerModal.bind(this);
        this.assignLeaguePoint = this.assignLeaguePoint.bind(this);
        this.toogleModelLeaguePoint = this.toogleModelLeaguePoint.bind(this);
        this.disableWarning = this.disableWarning.bind(this);
        this.assignRankIcon = this.assignRankIcon.bind(this);
    }


    assignRankIcon = () => {
        if (this.state.initialRank.search("Iron") !== -1) {
            this.setState({initialImage: firstrank}, () => {console.log(this.state.initialImage)} )
        } else if (this.state.initialRank.search("Bronze") !== -1) {
            this.setState({initialImage: secondrank}, () => {console.log(this.state.initialImage)})
        } else if (this.state.initialRank.search("Silver") !== -1) {
            this.setState({initialImage: thirdrank}, () => {console.log(this.state.initialImage)})
        } else if (this.state.initialRank.search("Gold") !== -1) {
            this.setState({initialImage: forthrank}, () => {console.log(this.state.initialImage)})
        } else if (this.state.initialRank.search("Platinum") !== -1) {
            this.setState({initialImage: fifthrank}, () => {console.log(this.state.initialImage)})
        } else if (this.state.initialRank.search("Diamond") !== -1) {
            this.setState({initialImage: sixthrank}, () => {console.log(this.state.initialImage)})
        } else if (this.state.initialRank.search("Master") !== -1) {
            this.setState({initialImage: seventhrank}, () => {console.log(this.state.initialImage)})
        } else {
            console.log("not working");
        }

        if (this.state.destinedRank.search("Iron") !== -1) {
            this.setState({destinedImage: firstrank}, () => {console.log(this.state.destinedImage)} )
        } else if (this.state.destinedRank.search("Bronze") !== -1) {
            this.setState({destinedImage: secondrank}, () => {console.log(this.state.destinedImage)})
        } else if (this.state.destinedRank.search("Silver") !== -1) {
            this.setState({destinedImage: thirdrank}, () => {console.log(this.state.destinedImage)})
        } else if (this.state.destinedRank.search("Gold") !== -1) {
            this.setState({destinedImage: forthrank}, () => {console.log(this.state.destinedImage)})
        } else if (this.state.destinedRank.search("Platinum") !== -1) {
            this.setState({destinedImage: fifthrank}, () => {console.log(this.state.destinedImage)})
        } else if (this.state.destinedRank.search("Diamond") !== -1) {
            this.setState({destinedImage: sixthrank}, () => {console.log(this.state.destinedImage)})
        } else if (this.state.destinedRank.search("Master") !== -1) {
            this.setState({destinedImage: seventhrank}, () => {console.log(this.state.destinedImage)})
        } else if (this.state.destinedRank.search("GrandMaster") !== -1) {
            this.setState({destinedImage: eightrank}, () => {console.log(this.state.destinedImage)})
        } else {
            console.log("not working");
        }
    }

    checkRank = () => {
        if (this.state.rankOrder.indexOf(this.state.initialRank) >= this.state.rankOrder.indexOf(this.state.destinedRank)) {
            this.setState({tooglewarning: "block"})
        } else {
            this.setState({tooglewarning: "none"})
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.destinedRank !== this.state.destinedRank) {
            this.assignRankIcon();
            this.checkRank();
        } else if (prevState.initialRank !== this.state.initialRank) {
            this.assignRankIcon();
            this.checkRank();
        }
    }
    toogleModelone = (event) => {
        event.preventDefault();
        if (this.state.showModalone === "block") {
            this.setState({showModalone: "none"})
        } else {
            this.setState({showModalone: "block"})
        }
    }

    toogleServerModal = (event) => {
        event.preventDefault();
        if (this.state.showServerModal === "block") {
            this.setState({showServerModal: "none"})
        } else {
            this.setState({showServerModal: "block"})
        }
    }

    assignLeaguePoint = (event) => {
        this.setState({showModalLeaguePoint: "none", leaguePoint: event.target.innerText})
    }

    assigRankOne = (event) => {
        this.setState({showModalone: "none", initialRank: event.target.innerText})
    }

    assigRankTwo = (event) => {
        this.setState({showModaltwo: "none", destinedRank: event.target.innerText})
    }

    assignServer = (event) => {
        this.setState({showServerModal: "none", server: event.target.innerText})
    }


    toogleModeltwo = (event) => {
        event.preventDefault();
        if (this.state.showModaltwo === "block") {
            this.setState({showModaltwo: "none"})
        } else {
            this.setState({showModaltwo: "block"})
        }
    }

    toogleModelLeaguePoint = (event) => {
        event.preventDefault();
        if (this.state.showModalLeaguePoint === "block") {
            this.setState({showModalLeaguePoint: "none"})
        } else {
            this.setState({showModalLeaguePoint: "block"})
        }    
    }

    disableWarning = () => {
        this.setState({tooglewarning: "none"});
    }


    render() {
        return (
            <div className='selection-card-container'>
               <div className="selection-card" id="base" >
                    <img src={this.state.initialImage} alt="rank-card" />
                    <div className="rank">
                       <p className="rank-name" onClick={this.toogleModelone}>Rank</p>
                       <p className="rank-tier">{this.state.initialRank}</p>
                    </div>
                    <div className="rank">
                        <p className="rank-name" onClick={this.toogleModelQueue}>Queue</p>
                        <p className="rank-tier">Solo</p>
                    </div>
                    <div className="server-lp">
                        <div>
                           <p className="rank-name" onClick={this.toogleServerModal} >Server</p>
                           <p className="rank-tier">{this.state.server}</p>  
                        </div>
                        <div>
                           <p className="rank-name" onClick={this.toogleModelLeaguePoint}>League Point</p>
                           <p className="rank-tier">{this.state.leaguePoint}</p>
                        </div>
                    </div>
                </div>

                <div className="selection-card" id="destination">
                    <img src={this.state.destinedImage} alt="rank-card" />
                    <div className="rank">
                       <p className="rank-name" onClick={this.toogleModeltwo}>Rank</p>
                       <p className="rank-tier">{this.state.destinedRank}</p>
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

                {/* here we are having out second modal */}

                <div className="modal" style={{display: this.state.showModaltwo}} >
                    <div className="league-modal">
                        <div className="league">
                            <img src={require("../../images/firstrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>Iron 4</p></li>
                                <li><p onClick={this.assigRankTwo}>Iron 3</p></li>
                                <li><p onClick={this.assigRankTwo}>Iron 2</p></li>
                                <li><p onClick={this.assigRankTwo}>Iron 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/secondrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>Bronze 4</p></li>
                                <li><p onClick={this.assigRankTwo}>Bronze 3</p></li>
                                <li><p onClick={this.assigRankTwo}>Bronze 2</p></li>
                                <li><p onClick={this.assigRankTwo}>Bronze 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/thirdrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>Silver 4</p></li>
                                <li><p onClick={this.assigRankTwo}>Silver 3</p></li>
                                <li><p onClick={this.assigRankTwo}>Silver 2</p></li>
                                <li><p onClick={this.assigRankTwo}>Silver 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/forthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>Gold 4</p></li>
                                <li><p onClick={this.assigRankTwo}>Gold 3</p></li>
                                <li><p onClick={this.assigRankTwo}>Gold 2</p></li>
                                <li><p onClick={this.assigRankTwo}>Gold 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/fifthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>Platinum 4</p></li>
                                <li><p onClick={this.assigRankTwo}>Platinum 3</p></li>
                                <li><p onClick={this.assigRankTwo}>Platinum 2</p></li>
                                <li><p onClick={this.assigRankTwo}>Platinum 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>Diamond 4</p></li>
                                <li><p onClick={this.assigRankTwo}>Diamond 3</p></li>
                                <li><p onClick={this.assigRankTwo}>Diamond 2</p></li>
                                <li><p onClick={this.assigRankTwo}>Diamond 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>Master</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/seventhrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankTwo}>GrandMaster</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* here we have our first modal */}

                <div className="modal" style={{display: this.state.showModalone}} >
                    <div className="league-modal">
                        <div className="league">
                            <img src={require("../../images/firstrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankOne}>Iron 4</p></li>
                                <li><p onClick={this.assigRankOne}>Iron 3</p></li>
                                <li><p onClick={this.assigRankOne}>Iron 2</p></li>
                                <li><p onClick={this.assigRankOne}>Iron 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/secondrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankOne}>Bronze 4</p></li>
                                <li><p onClick={this.assigRankOne}>Bronze 3</p></li>
                                <li><p onClick={this.assigRankOne}>Bronze 2</p></li>
                                <li><p onClick={this.assigRankOne}>Bronze 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/thirdrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankOne}>Silver 4</p></li>
                                <li><p onClick={this.assigRankOne}>Silver 3</p></li>
                                <li><p onClick={this.assigRankOne}>Silver 2</p></li>
                                <li><p onClick={this.assigRankOne}>Silver 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/forthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankOne}>Gold 4</p></li>
                                <li><p onClick={this.assigRankOne}>Gold 3</p></li>
                                <li><p onClick={this.assigRankOne}>Gold 2</p></li>
                                <li><p onClick={this.assigRankOne}>Gold 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/fifthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankOne}>Platinum 4</p></li>
                                <li><p onClick={this.assigRankOne}>Platinum 3</p></li>
                                <li><p onClick={this.assigRankOne}>Platinum 2</p></li>
                                <li><p onClick={this.assigRankOne}>Platinum 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankOne}>Diamond 4</p></li>
                                <li><p onClick={this.assigRankOne}>Diamond 3</p></li>
                                <li><p onClick={this.assigRankOne}>Diamond 2</p></li>
                                <li><p onClick={this.assigRankOne}>Diamond 1</p></li>
                            </ul>
                        </div>
                        <div className="league">
                            <img src={require("../../images/sixthrank.png")} alt="rank-card" />
                            <ul className="league-list">
                                <li><p onClick={this.assigRankOne}>Master</p></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* here we have our first modal */}

                <div className="modal" style={{display: this.state.showServerModal}} >
                    <div className="server-modal">
                        < div className="server" onClick={this.assignServer}>
                            <img src={require("../../images/eunemap.png")} alt="maps" />
                            <p>EUNE</p>
                        </div>
                        < div className="server" onClick={this.assignServer}>
                            <img src={require("../../images/euwmap.png")} alt="maps" />
                            <p>EUW</p>
                        </div>
                        < div className="server" onClick={this.assignServer}>
                            <img src={require("../../images/namap.png")} alt="maps" />
                            <p>NA</p>
                        </div>
                        < div className="server" onClick={this.assignServer}>
                            <img src={require("../../images/ocemap.png")} alt="maps" />
                            <p>OCE</p>
                        </div>
                    </div>
                </div>

                {/* here we have our league point modal */}

                <div className="modal" style={{display: this.state.showModalLeaguePoint}}>
                    <div className="league-point-modal">
                        <h2>Select Your league Points</h2>
                        <div className="points">
                            <p onClick={this.assignLeaguePoint}>0-20</p>
                            <p onClick={this.assignLeaguePoint}>21-40</p>
                            <p onClick={this.assignLeaguePoint}>41-60</p>
                            <p onClick={this.assignLeaguePoint}>61-80</p>
                            <p onClick={this.assignLeaguePoint}>81-99</p>
                            <p onClick={this.assignLeaguePoint}>100</p>
                        </div>
                    </div>
                </div>

                {/* this is our warning modal */}

                <div className="modal" onClick={this.disableWarning} style={{display: this.state.tooglewarning}}>
                    <div className="warning">Please select a higher final rank</div>
                </div>


            </div>
        )
    }
}

export default SelectionCard
