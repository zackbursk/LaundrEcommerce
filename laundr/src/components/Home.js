import React, {Component} from 'react';
import FloatCart from './Cart';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import data from "../data";
import Products from "./products";

export default class home extends Component{

    render() {
        return (
            <div className="grid-container">
            <main className="main">
            <div className="content">
                <ul className="products">
                    {
                        this.props.products.map(product =>
                            <li>
                                <div className="product" style={{backgroundColor: product.color}}>
                                    <img className="product-image" src={product.image} alt="productImage"/>
                                    <div className="product-name">
                                        <a href="product.html">{product.name}</a>
                                    </div>
                                    <div className="product-price">${product.price}</div>
                                    <button
                                        onClick={() => this.props.addToCart(product)}
                                        className="button primary"
                                    >
                                        Add To Cart
                                    </button>
                                    <div className="product-tessellation" style={{backgroundImage: "url(" + product.tessellation + ")"}}></div>
                                </div>
                            </li>)
                    }
                </ul>
                <footer className="footer">
                    All Rights Reserved
                </footer>
            </div>

            </main>
            </div>
        );
    }
}