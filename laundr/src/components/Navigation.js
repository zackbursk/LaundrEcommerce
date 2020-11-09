import React,{useEffect} from 'react';
import './navbar.scss';
import Logo from '../images/images/laundr logo.png';
import FloatCart from "./Cart";
import Product from "./About";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./Home";
import NoMatch from "./NoMatch";

const Navbar=() => {
    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        // if(offset > 0 ) {
            setScrolled(true);
        // }
        // else{
        //     setScrolled(false);
        // }
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let x=['navbar'];
    if(scrolled){
        x.push('scrolled');
    }
    return (
        <header className={x.join(" ")}>
            <div className="logo">
                <a href="/"><img src={Logo} alt="Logo" title="Logo"/></a>
            </div>

            <nav className="navigation">
                <ul>
                    <FloatCart/>
                    <Router>
                        <Switch>
                            {/*<Route exact path="/" component={home} />*/}
                            {/*<Route path="/about" component={Product} />*/}
                            {/*<Route component={NoMatch} />*/}
                        </Switch>
                    </Router>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/story">Our Story</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;