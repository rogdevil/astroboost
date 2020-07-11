import React from 'react'
import Button from '../Button'

export default function Branding() {
    return(
        <div className="home-page-branding">
            <div className="home-page-branding-text">
                <h2>
                    <span className="red" style={{letterSpacing: "0.1em", fontSize: "32px"}}>ASTRO</span>
	    		    <span className="white" style={{fontSize: "32px"}}>BOOST</span>
                </h2>
                <h3 className="white">Get best boosters for League of legend</h3>
                <p className="white">We offer the most feature rich LoL Boosting solution in the market.
                        After years of developing our system, hiring the best boosters and ensuring we would provide the highest level of customer satisfaction, we decided to launch now!</p>
                <Button style={{width: "15em"}} name="check out our pricing" src="/pricing"/>
            </div>
                <img src={require("../../images/lolfighter.png")} alt="lol girl" />
        </div>
    )
}