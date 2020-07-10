import React, { Component } from 'react'
import Button from '../Components/Button'
import Feature from './Feature'
import Priority from './Priority-map'
import Footer from './Footer'
import Stats from './Stats'

class Home extends Component {
    
    render() {
        return (
            <div className="home-page">
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
                  <img src={require("../images/lolgirlimage.png")} alt="lol girl" />
              </div>

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

              <div className="why-us">
                  <p className="why-us-headline white"><span style={{fontSize: "1em", color: "var(--main-fg-color)"}}>Why Us</span> Because we are best in the business</p>
                  <p className="why-us-description white">
                      We have the team of one of the best boosters out there and we provide our customer with 
                      best services. We have the best customer support in the market. when it comes to us we 
                      have the best reputation in the market for on time completion of orders. 
                  </p>  
              </div>

              <Stats />

              <div className="our-goals">
                  <p className="our-goals-heading red">Our Goals</p>
                  <p className="white">We are one of a kind, there are a lot competitors in the market but we are special, 
                      we prioritize the important 
                      things that would benefit the customers the most to build a huge customer base.</p>
                  <div className="priority-container">
                    <Priority number="01"  heading="PREMIUM LOL BOOSTING EXPERIENCE"  description="Our philosophy is to provide the best LoL ELO boosting experience on the internet. BoostForLoL continuously improves and innovates its service offering while focusing on customer needs, making it possible to stay the best and number one service provider when it comes to LoL ELO boosting." />
                    <Priority number="02"  heading="FAST & INSTANT DELIVERY"  description="AstroBoost uses Grandmaster and Challenger boosters who perform with high win-rates in all ranks. We think this is the best way to maintain the professional speed and performance of our service. Our ELO boosting services guarantee the fastest results." />
                    <Priority number="03"  heading="TOP SAFETY & PRIVACY"  description="BoostForLoL provides the safest lol elo boost experience available. The company implemented various measures in its boosting mechanism with the goal of creating the safest and most private way of elo boosting available. All data that flows through the site is encrypted with SSL technology to protect privacy." />
                    <Priority number="04"  heading="COST-EFFICIENT LOL BOOST SOLUTION"  description="LoL elo boosts from BoostForLoL are available at the cheapest prices. The company continuously manages to keep the base pricing low to benefit players who are looking to buy a lol elo boost for their accounts. Additionally, by offering continuous discounts and coupon codes for our clients, we make sure that our pricing stays competitive." />
                  </div>
              </div>

              <Footer />
            </div>
        )
    }
}

export default Home
