import React from 'react';

const Coffee_Vanilla = () => {
    return (
        <div className="page-main">
            <div className="navbar-background-rect" style={{backgroundColor: "#e2cea3"}}></div>
            <div className="page-title" style={{color: "#e2cea3"}}>
                Coffee <br/> Vanilla
            </div>
            <img className="page-image" src="/img/products/coffee.png" alt="productImage"></img>
            <div className="page-ingredients">
                <div className="page-header">Ingredients</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="page-nutrition">
                <div className="page-header">Additional Information</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="page-fragrance">
                <div className="page-header">This fragrance has hints of:</div>
                <div className="page-fragrant">Dark Coffee Beans</div>
                <div className="page-fragrant">Vanilla Extract</div>
                <div className="page-fragrant">Hazelnut Cream</div>
            </div>
            <div className="page-description">
                <div className="page-header"> Scented Description </div>
                Smells like the steam rising off of a hot vanilla latte. Great for sitting in an armchair in a quaint neighborhood cafe.
            </div>
        </div>
    );
}

export default Coffee_Vanilla;