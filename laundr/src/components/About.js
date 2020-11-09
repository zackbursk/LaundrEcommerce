import React from 'react';
import product from '../images/images/freshair_asset.png'
import background from '../images/images/freshair_pattern.png'
import data from "../data";

const About = () => {
    return (
    <div>
        <main className="main">
            <div className = "header-1">
                Social Media Accounts
            </div>
            <div className = "header-2">
                <a href="http://facebook.com/laundrofficial">Facebook</a>
            </div>
            <div className = "header-2">
                <a href="http://instagram.com/laundrofficial">Instagram</a>
            </div>
            <div className = "header-2">
                <a href="https://twitter.com/laundrofficial">Twitter</a>
            </div>
            <div className = "header-1">
                Contact Info
            </div>
            <div className = "header-2">
                Phone: (352) 363 - 5211
            </div>
            <div className = "header-2">
                Email: support@laundr.io
            </div>
            <div className = "header-2">
                Website: https://laundr.io
            </div>
        </main>
    </div>
    );
}

export default About;