import React from 'react'

function Feature(props) {
    return(
        <div className="feature">
            <div className="feature-heading white">
               <i className={props.icon}></i>
                <p className="white">{props.heading}</p> 
            </div>
            <div className="feature-description">
            <p className="white">{props.description}</p>
            </div>
        </div>
    )
}

export default Feature;