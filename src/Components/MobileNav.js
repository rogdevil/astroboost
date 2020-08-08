import React from 'react';
import {Link} from 'react-router-dom';

const MobileNav = (props) => {
    return (
        <div className="mobile-nav">
    		<ul>
    			<li>
    				<Link to="/">Home</Link>
    			</li>
    			<li>
    				<Link to="/boosting/solo">Boosting</Link>
    			</li>
    			<li>
    				<Link to="/faq">FAQ</Link>
    			</li>
    			<li>
    				<Link to="/contactus">Contact Us</Link>
    			</li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
    		</ul>
    	</div>
    )
}

export default MobileNav;