import React, { Component } from  "react"
import '../styles/Portfolio.css'
import PortTitle from './PortTitle'

class Portfolio extends Component {
    state = {
        projects: [
            
        ]
    }
    
    render() { 
        return (
            <div>
                <PortTitle/>
            </div>
        );
    }
}
 
export default Portfolio;