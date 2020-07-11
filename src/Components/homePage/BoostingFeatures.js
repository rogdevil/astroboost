import React from 'react'
import Feature from './Feature'

export default function BoostingFeatures() {
    return (
        <div className="home-page-boosting-features">
            <h2>
                <span className="red" style={{letterSpacing: "0.1em", fontSize: "28px"}}>ASTRO</span>
                <span className="white" style={{fontSize: "28px"}}>BOOST </span>
                <p style={{fontSize: "28px", display: "inline-block", color: "var(--main-white)", fontWeight: "normal"}}> Features</p>
            </h2>
            <p className="white" style={{padding: "0.3em", borderBottom: "0.1em var(--main-fg-color) solid", fontSize: "20px", marginTop: "2em"}}>Some of the best features provided by us</p>
            <div className="feature-container">
                <Feature icon="fas fa-headset" heading="Support" description="We have a professionally trained hand picked customer support ready to help you solve any issue!" />
                <Feature icon="fas fa-shield-alt" heading="VPN & Safety" description="All our boosters use a very premium Virtual Private Network to protect your account while boosting it!" />
                <Feature icon="fas fa-truck" heading="Fast order completion" description="We ensure to our customers that orders will never take longer than accepted and respect customers time!" />
                <Feature icon="fas fa-user-secret" heading="Privacy" description="All our boosters use offline mode while boosting your accounts so your order is totally private!" />
                <Feature icon="fas fa-star" heading="The best booster" description="We took an oath to hire the best boosters available in this scene only to ensure the highest quality of boosting!" />
                <Feature icon="fas fa-chart-line" heading="Order tracking dashboard" description="We provide a very unique order tracking dashboard to be able to track your order all the time!" />
            </div>
        </div>
    )
}