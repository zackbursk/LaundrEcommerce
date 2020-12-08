import React, {Component} from 'react';

export default class White_Gardenia extends Component{

    render() {
        const {products} = this.props;
        return (
            <div className="page-main">
                <div className="navbar-background-rect" style={{backgroundColor: "#f4ea9c"}}></div>
                <div className="page-title" style={{color: "#f4ea9c"}}>
                    White <br/> Gardenia
                </div>
                <img className="page-image" src="/img/products/gardenia.png" alt="productImage"></img>
                <div className="page-ingredients">
                    <div className="page-header">Ingredients
                        <button

                            onClick={() => this.props.addToCart(products[3])}
                            className="button primary"
                        >
                            Add To Cart
                        </button>
                    </div>
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
                    <br/>
                </div>
                <div className="page-fragrance">
                    <div className="page-header">This fragrance has hints of:</div>
                    <div className="page-fragrant">Gardenia Shrub</div>
                    <div className="page-fragrant">Floral Essence</div>
                    <div className="page-fragrant">Apple Water</div>
                </div>
                <div className="page-description">
                    <div className="page-header"> Fresh Description</div>
                    A sweet and floral perfume with relaxing notes, best used after a carefree frolic through a field of
                    wildflowers.
                </div>
            </div>
        );
    }
}
