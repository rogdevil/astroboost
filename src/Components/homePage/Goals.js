import React from 'react'
import Priority from './Priority-map'

export default function Goals() {
    return (
        <div className="our-goals">
            <p className="our-goals-heading red">Our Goals</p>
            <p className="white">We are one of a kind, there are a lot competitor in the market but we are special, 
                we have our priorities, the important 
                things that would benefit the customers the most to build a huge customer base.</p>
            <div className="priority-container">
            <Priority number="01"  heading="AMAZING LOL BOOSTING EXPERIENCE"  description="Our vision is to provide the best League of legends ELO boosting experience on the internet. AstroBoost provides the greatest and most enjoyable customer experience, making it possible to stay the number one service provider when it comes to League of legends ELO boosting." />
            <Priority number="02"  heading="FAST & INSTANT DELIVERY"  description="AstroBoost uses Grandmaster and Challenger boosters performing high win-rates in all ranks. We think this is the best way to keep proffesional speed and performance. Our ELO boosting services guarantee the fastest results." />
            <Priority number="03"  heading="TOP SAFETY & PRIVACY"  description="AstroBoost provides the safest elo boost experience period. We make sure that all data is safe and encrypted when it comes into our database. So all you have to do is send it, sit back and relax!." />
            <Priority number="04"  heading="COST-EFFICIENT LOL BOOST SOLUTION"  description="AstroBoost makes sure all prices are cheap and competitive. We constantly manage the prices in order to keep them low and affordable! So you never have to worry about burning a hole in your pockets!." />
            </div>
        </div>
    )
}