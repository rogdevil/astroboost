import React from 'react';

export default function Stats(props) {
    return(
        <div className="stats">
            <div>
                <p className="stat-number red">4500+</p>
                <p className="stat-description white">Order Completed</p>
            </div>
            <div className="middle">
                <p className="stat-number red">40</p>
                <p className="stat-description white">Boosters Ready</p>
            </div>
            <div>
                <p className="stat-number red">150</p>
                <p className="stat-description white">Positive Reviews</p>
            </div>
        </div>
    )
}