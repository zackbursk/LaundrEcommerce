import React,{useEffect} from 'react';
import './navbar.scss';
import Logo from '../laundr logo.png';

const Navbar=() => {
    const [scrolled,setScrolled]=React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
            setScrolled(true);
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
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/story">Our Story</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;