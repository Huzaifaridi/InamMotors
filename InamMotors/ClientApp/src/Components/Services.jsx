import React from 'react';
import CarRepaired from '../images/icon-car.png'
import CarDiagnoses from '../images/icon-wrench.png'
import GearsChanged from '../images/icon-gears.png'
import OilLitresUsed from '../images/icon-oil.png'

function Services() {
    return (
        <div className="fullwidth-block">
        <div className="container">
            <h2 className="section-title">Welcome to our website</h2>
            <div className="row">
                <div className="counter">
                    <img src={CarRepaired} className="counter-icon" alt="" />
                    <h3 className="counter-num">1500</h3>
                    <small className="counter-label">car repaired</small>
                </div>
                <div className="counter">
                    <img src={CarDiagnoses} className="counter-icon"  alt=""/>
                    <h3 className="counter-num">5000</h3>
                    <small className="counter-label">diagnoses</small>
                </div>
                <div className="counter">
                    <img src={GearsChanged} className="counter-icon"  alt=""/>
                    <h3 className="counter-num">6000</h3>
                    <small className="counter-label">gears changed</small>
                </div>
                <div className="counter last">
                    <img src={OilLitresUsed} className="counter-icon"  alt="" />
                    <h3 className="counter-num">1200</h3>
                    <small className="counter-label">oil litres used</small>
                </div>
            </div>
        </div> 
    </div> 
    );
}

export default Services;
