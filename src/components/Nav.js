import React, { Component } from  "react"
import '../styles/Nav.css'
import { Link } from 'react-router-dom'

class Nav extends Component {
    
    render() { 
        return (
            <div className="navBar">
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>
        );
    }
}
 
export default Nav;