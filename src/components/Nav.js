import React, { Component } from  "react"
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
    
    render() { 
        return (
            <div className="navBar">
                <Link to="/" className="navLink">Home</Link>
                <Link to="/aboutme" className="navLink">About Me</Link>
                <Link to="/portfolio" className="navLink">Portfolio</Link>
                <Link to="/contact" className="navLink">Contact</Link>
            </div>
        );
    }
}
 
export default Nav;