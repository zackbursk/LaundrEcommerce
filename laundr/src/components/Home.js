import React from 'react';
import FloatCart from './Cart';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "../data";

const home = () => {
    return (
        <div className="grid-container">
        <main className="main">
            <div className="content">
                <ul className="products">
                    {
                        data.products.map(product =>
                            <li>
                                <div className="product" style={{backgroundColor: product.color}}>
                                    <img className="product-image" src={product.image} alt="productImage"/>
                                    <div className="product-name">
                                        <a href="product.html">{product.name}</a>
                                    </div>
                                    <div className="product-price">${product.price}</div>
                                </div>
                            </li>)
                    }
                </ul>
            </div>
        </main>
    <footer className="footer">
        All Rights Reserved
    </footer>
        </div>
    );
}

export default home;