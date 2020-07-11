import React, { Component } from 'react'
import Footer from './Footer'
import Stats from './homePage/Stats'
import Branding from './homePage/Branding'
import BoostingFeatures from './homePage/BoostingFeatures'
import Whyus from './homePage/Whyus'
import Goals from './homePage/Goals'

class Home extends Component {
    
    render() {
        return (
            <div className="home-page">
                <Branding />
                <BoostingFeatures />
                <Whyus />
                <Stats />
                <Goals />
                <Footer />
            </div>
        )
    }
}

export default Home
