import React from 'react';

export default function Footer() {
    return(
            <div className="footer">
                <h2>
                    <img src={require('../images/main_logo.svg')} alt="astroboost"  style={{height: "100px"}}/>
                    <span className="red" style={{letterSpacing: "0.1em"}}>ASTRO</span>
                    <span className="white">BOOST</span>
                </h2>
                <div className="social-media-handle">
                    <a href="https://www.facebook.com"><i className="fab red fa-facebook"></i></a>
                    <a href="www.facebook.com"><i className="fab red fa-twitter"></i></a>
                    <a href="www.facebook.com"><i className="fab red fa-instagram"></i></a>
                    <a href="www.facebook.com"><i className="fab red fa-discord"></i></a>
                </div>
                <p className="white">
                    LEAGUE OF LEGENDS IS A REGISTERED TRADEMARK OF RIOT GAMES, INC. WE ARE IN NO WAY AFFILIATED WITH, ASSOCIATED WITH OR ENDORSED BY RIOT GAMES, INC.
                    BY USING THIS WEBSITE YOU CONSTITUTE ACCEPTANCE TERMS OF SERVICE AND PRIVACY POLICY. ALL COPYRIGHTS, TRADE MARKS, SERVICE MARKS BELONG TO THE CORRESPONDING OWNERS.
                    COPYRIGHT OF © ASTROBOOST.COM 2020-PRESENT ALL RIGHTS RESERVED
                </p>
            </div>
    )
}