import React, {Component} from 'react';

export default class Mahogany_Teakwood extends Component{

    render() {
        const {products} = this.props;
        return (
            <div className="page-main">
                <div className="navbar-background-rect" style={{backgroundColor: "#5b5b5b"}}></div>
                <div className="page-title" style={{color: "#5b5b5b"}}>
                    Mahogany <br/> Teakwood
                </div>
                <div className="button-container">
                        <button
                            onClick={() => this.props.addToCart(products[4])}
                            className="button primary"
                            >
                            Add To Cart
                        </button>
                    </div>
                <img className="page-image" src="/img/products/mahogany.png" alt="productImage"></img>
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
                    <div className="page-fragrant">Oak and Mahogany Wood</div>
                    <div className="page-fragrant">Boreal Forestry</div>
                    <div className="page-fragrant">Light Musk</div>
                </div>
                <div className="page-description">
                    <div className="page-header"> Scented Description</div>
                    A great everyday alternative to cologne, or for a getaway to a log cabin hidden deep in a snowy
                    forest.
                </div>
            </div>
        );
    }
}
