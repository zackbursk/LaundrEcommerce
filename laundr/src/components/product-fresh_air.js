import React from 'react';

const Fresh_Air = () => {
    return (
        <div className="page-main">
            <div className="navbar-background-rect" style={{backgroundColor: "#8dcfdd"}}></div>
            <div className="page-title" style={{color: "#8dcfdd"}}>
                Fresh <br/> Air
            </div>
            <img className="page-image" src="/img/products/fresh.png" alt="productImage"></img>
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
                <div className="page-fragrant">Cotton</div>
                <div className="page-fragrant">Ozone</div>
                <div className="page-fragrant">Tropical Fruit</div>
            </div>
            <div className="page-description">
                <div className="page-header"> Scented Description </div>
                A soft, cottony fragrance that smells even cleaner than clean. Great for leaping face-first into a gigantic, fluffy comforter.
            </div>
        </div>
    );
}

export default Fresh_Air;