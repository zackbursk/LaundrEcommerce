import React, {Component} from 'react';
import data from './data';
import './App.css';
import FloatCart from "./components/Cart";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import Products from "./components/products";

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            products: data.products,
            cartItems: [],
            size: "",
            sort: "",
        };
    }
    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = true;
        cartItems.forEach((item) => {
            if (item.count > 1 && item._id === product._id) {
                item.count--;
                alreadyInCart = false;
            }
        });
        if (alreadyInCart) {
            cartItems.pop();
        }
        this.setState({ cartItems });

    };
    addToCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if (item._id === product._id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({ ...product, count: 1 });
        }
        this.setState({ cartItems });
    };
    render() {
        return (
            <div>
                <Navigation/>
                <FloatCart
                    cartItems={this.state.cartItems}
                    removeFromCart={this.removeFromCart}
                    addToCart={this.addToCart}
                />
                <Router>
                    <Switch>
                <Route exact path="/"><Home
                    products={this.state.products}
                    addToCart={this.addToCart}
                />
                </Route><Route exact path="/about"><About
                />
                </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
