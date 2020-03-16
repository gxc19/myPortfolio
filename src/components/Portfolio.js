import React, { Component } from  "react"
import '../styles/Portfolio.css'
import PortTitle from './PortTitle'
import PortLayout from './PortLayout'
import appleClone from '../images/appleClone.png'
import bongoCat from '../images/bongoCat.png'
import calculator from '../images/calculator.png'
import googleFonts from '../images/googleFonts.png'
import weatherApp from '../images/weatherApp.png'

class Portfolio extends Component {
    state = {
        projects: [
            { image: calculator, title: "Calculator", link: 'https://gxc19.github.io/calculator', moreInfo: false},
            { image: googleFonts, title: "Google Fonts", link: 'https://gxc19.github.io/gfont-clone-challenge', moreInfo: false},
            { image: appleClone, title: "Apple Clone", link: 'https://gxc19.github.io/appleWebsiteClone', moreInfo: false},
            { image: bongoCat, title: "Bongo Cat", link: 'https://gxc19.github.io/drumKit', moreInfo: false},
            { image: weatherApp, title: "Weather App", link: 'https://powerful-ridge-89114.herokuapp.com', moreInfo: false},
        ]
    }
    
    render() { 
        return (
            <div>
                <PortTitle/>
                <PortLayout projectInfo = {this.state.projects}/>
            </div>
        );
    }
}
 
export default Portfolio;