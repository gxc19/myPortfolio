import React, { Component } from  "react"
import '../styles/AboutMe.css'
import AboutTitle from './AboutTitle'
import AboutInfo from './AboutInfo'
import AboutInfo2 from './AboutInfo2'

class AboutMe extends Component {
   
    render() { 
        return (
            <div>
                <AboutTitle/>
                <AboutInfo/>
                <AboutInfo2/>
            </div>
        );
    }
}
 
export default AboutMe;