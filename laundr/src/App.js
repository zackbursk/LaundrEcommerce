import React from 'react';
import data from './data';
import './App.css';
import FloatCart from "./components/Cart";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

function App() {
    return (
        <div className="grid-container">
            <Navigation />
            <Router>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/about" component={About}/>
                <Route component={NoMatch} />
            </Switch>
            </Router>
        </div>
    );
}

export default App;
