import React, { Component } from  "react"
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'

class Nav extends Component {
    
    render() { 
        return (
            <div>
                <div className>
                     <BurgerMenu/>
                </div>
                <div className="navBar">
                    <div className="navBox">
                        <Link to="/" className="navLink">Home</Link>
                        <Link to="/aboutme" className="navLink">About Me</Link> 
                        <Link to="/portfolio" className="navLink">Portfolio</Link>
                        <Link to="/contact" className="navLink">Contact</Link>
                    </div>
                </div>
            </div>
            
        );
    }
}
 
export default Nav;