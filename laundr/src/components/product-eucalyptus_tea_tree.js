import React, {Component} from 'react';

export default class Eucalyptus_Tea_Tree extends Component{

    render() {
        const {products} = this.props;
        return (
            <div className="page-main">
                <div className="navbar-background-rect" style={{backgroundColor: "#48c47e"}}></div>
                <div className="page-title" style={{color: "#48c47e"}}>
                    Eucalyptus <br/> Tea Tree
                </div>
                <div className="button-container">
                        <button
                            onClick={() => this.props.addToCart(products[2])}
                            className="button primary"
                            >
                            Add To Cart
                        </button>
                    </div>
                <img className="page-image" src="/img/products/eucalyptus.png" alt="productImage"></img>
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
                    <div className="page-fragrant">Tea Tree and Eucalyptus</div>
                    <div className="page-fragrant">Natural Herbs</div>
                    <div className="page-fragrant">Bergamot Orange</div>
                </div>
                <div className="page-description">
                    <div className="page-header"> Scented Description</div>
                    A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and
                    having a “me day.”
                </div>
            </div>
        );
    }
}

