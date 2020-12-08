import React, {Component} from 'react';
import data from './data';
import './App.css';
import FloatCart from "./components/Cart";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Story from "./components/Story";
import Home from "./components/Home";
import Fresh_Air from "./components/product-fresh_air";
import Coffee_Vanilla from "./components/product-coffee_vanilla"
import Eucalyptus_Tea_Tree from "./components/product-eucalyptus_tea_tree"
import White_Gardenia from "./components/product-white_gardenia"
import Mahogany_Teakwood from "./components/product-mahogany_teakwood"
import Watermelon_Cucumber from "./components/product-watermelon_cucumber"

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            products: data.products,
            cartItems: localStorage.getItem("cartItems")
                ? JSON.parse(localStorage.getItem("cartItems"))
                : [],
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
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    };

    removeAllFromCart = (product) => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter((x) => x._id !== product._id),
        });
        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems.filter((x) => x._id !== product._id))
        );
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
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
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
                </Route><Route exact path="/about"><About/></Route>
                        <Route exact path="/story"><Story/></Route>
                <Route exact path="/fresh_air"><Fresh_Air
                    products={this.state.products}
                    addToCart={this.addToCart}
                /></Route>
                <Route exact path="/coffee_vanilla"><Coffee_Vanilla
                    products={this.state.products}
                    addToCart={this.addToCart}
                /></Route>
                <Route exact path="/eucalyptus_tea_tree"><Eucalyptus_Tea_Tree
                    products={this.state.products}
                    addToCart={this.addToCart}
                /></Route>
                <Route exact path="/white_gardenia"><White_Gardenia
                    products={this.state.products}
                    addToCart={this.addToCart}
                /></Route>
                <Route exact path="/mahogany_teakwood"><Mahogany_Teakwood
                    products={this.state.products}
                    addToCart={this.addToCart}
                /></Route>
                <Route exact path="/watermelon_cucumber"><Watermelon_Cucumber
                    products={this.state.products}
                    addToCart={this.addToCart}
                /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
