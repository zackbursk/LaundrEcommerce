import React, {Component} from 'react';

export default class Watermelon_Cucumber extends Component{

    render() {
        const {products} = this.props;
        return (
            <div className="page-main">
                <div className="navbar-background-rect" style={{backgroundColor: "#ff5656"}}></div>
                <div className="page-title" style={{color: "#ff5656"}}>
                    Watermelon <br/> Cucumber
                </div>
                <div className="button-container">
                        <button
                            onClick={() => this.props.addToCart(products[5])}
                            className="button primary"
                            >
                            Add To Cart
                        </button>
                    </div>
                <img className="page-image" src="/img/products/watermelon.png" alt="productImage"></img>
                <div className="page-ingredients">
                    <div className="page-header">Ingredients</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="page-nutrition">
                    <div className="page-header">Additional Information</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="page-fragrance">
                    <div className="page-header">This fragrance has hints of:</div>
                    <div className="page-fragrant">Crisp Cucumber</div>
                    <div className="page-fragrant">Sweet Melon</div>
                    <div className="page-fragrant">Cool Grapefruit</div>
                </div>
                <div className="page-description">
                    <div className="page-header"> Scented Description</div>
                    A sweet, cool and refreshing smell for brightening up your day. Great for picnic blankets, overalls,
                    and being in a generally good mood.
                </div>
            </div>
        );
    }
}
