import React, {Component} from 'react';
import data from './data';
import './App.css';
import FloatCart from "./components/Cart";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Story from "./components/Story";
import Home from "./components/Home";

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
        cartItems.forEach((item) => {
            if (item.count > 1 && item._id === product._id) {
                item.count--;
            }
        });
        this.setState({ cartItems });
    };

    removeAllFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });
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
                    removeAllFromCart={this.removeAllFromCart}
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
                    </Route><Route exact path="/story"><Story
                />
                </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
