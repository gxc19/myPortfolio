import React, { Component } from  "react"
import '../styles/Portfolio.css'
import PortTitle from './PortTitle'
import PortLayout from './PortLayout'
import appleClone from '../images/appleClone3.png'
import bongoCat from '../images/bongoCat3.png'
import calculator from '../images/calculator3.png'
import googleFonts from '../images/googleFonts3.png'
import weatherApp from '../images/weatherApp3.png'

class Portfolio extends Component {
    state = {
        projects: [
            { image: calculator, title: "Calculator", link: 'https://gxc19.github.io/calculator', info: 'This is a calculator I have made using React'},
            { image: bongoCat, title: "Bongo Cat", link: 'https://gxc19.github.io/drumKit', info: 'This is a Bongo Cat themed drum kit using a combination of JavaScript Dom, HTML and CSS.'},
            { image: weatherApp, title: "Weather App", link: 'https://powerful-ridge-89114.herokuapp.com', info: 'This is a full stack weather application'},
            { image: appleClone, title: "Apple Clone", link: 'https://gxc19.github.io/appleWebsiteClone', info: 'This a cloned version of Apples website using HTML and CSS'},
            { image: googleFonts, title: "Google Fonts", link: 'https://gxc19.github.io/gfont-clone-challenge', info: 'This is a cloned version of Google Fonts website using React'},
        ]
    }
    
    render() { 
        return (
            <div className="portfolio">
                <PortTitle/>
                <PortLayout projectInfo = {this.state.projects}/>
            </div>
        );
    }
}
 
export default Portfolio;