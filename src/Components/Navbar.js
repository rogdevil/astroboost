import React from 'react';
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'

const Navbar = (props) => {
  return (
    <nav className="Navbar">
    	<div className="brand-logo">
    		<Link style={{textDecoration: "none"}} to="/">
	    		<h2>
                    <img src={require('../images/main_logo.svg')} alt="astroboost"  style={{height: "100px"}}/>
	    			<span className="red" style={{letterSpacing: "0.1em"}}>ASTRO</span>
	    			<span className="white">BOOST</span>
	    		</h2>
    		</Link>
    	</div>

    	<div className="nav-items">
    		<ul>
    			<li>
    				<Link to="/">Home</Link>
    			</li>
    			<li>
    				<Link to="/aboutus">Boosting</Link>
    			</li>
    			<li>
    				<Link to="/FAQ">FAQ</Link>
    			</li>
    			<li>
    				<Link to="/contact">Contact Us</Link>
    			</li>
    			<li>
    				<Link to="/login">Login</Link>
    			</li>
    		</ul>
    	</div>

    	<Hamburger />
    </nav>
  )
}

export default Navbar;