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
                <div className="header-video">
                    <div className="header-video-text">Delightfully Fresh Laundry Detergent</div>
                    <div className="header-video-container">
                        <video autoPlay loop muted src="./video/oceanSample.mp4"></video>
                    </div>
                </div>
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
                                    <div className="product-description">{product.description}</div>
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
                    <div className="footer-contact">
                        Contact Info:
                        <div className="footer-info">Phone: (352) 363 - 5211</div>
                        <div className="footer-info">Email: support@laundr.io</div>
                        <div className="footer-info">Website: https://laundr.io</div>
                        <br/>
                        Social Media:
                        <div className="footer-info"><a href="http://facebook.com/laundrofficial" target="_blank">Facebook</a></div>
                        <div className="footer-info"><a href="http://instagram.com/laundrofficial" target="_blank">Instagram</a></div>
                        <div className="footer-info"><a href="https://twitter.com/laundrofficial" target="_blank">Twitter</a></div>
                    </div>
                    <div className="footer-news">
                            Latest News
                            <br/>
                            <div className="footer-news-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                    <div className="footer-bottom-text">All Rights Reserved | Privacy Policy | Terms of Service</div>
                </footer>
            </div>

            </main>
            </div>
        );
    }
}