import React from 'react';
import Navbar from './Navbar'

function About() {
    return(
        <div>
            <Navbar />
            <div id="AboutMeHeader">
                <h1> Invektus: Unconquerable Health, Unyielding Strength </h1>
            </div>
            <div id="AboutBody" className="aboutbody"><br />
                We are Invektus, an application designed to monitor vitals and blood sugar for diabetic patients 
                in hopes to encourage constant regulation of our users' health. By keeping track of the sugar levels, 
                individuals can make informed decisions regarding their lifestyle, dietary choices, and medication 
                management. This approach can help individuals to maintain stable blood sugar levels, reduce the risk of 
                complications associated with diabetes. Our application servers as a fundamental tool for patients in 
                effectively managing the challenges posed by this chronic condition.
            </div>
            <div>
            <img className='loginImg' src="https://pics.craiyon.com/2023-06-26/5c43832150134eb99cdee5fde6ffa06b.webp" alt="" />
            </div>
        </div>
        
    )
};

export default About;