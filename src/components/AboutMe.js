import React, { Component } from  "react"
import '../styles/AboutMe.css'
import AboutTitle from './AboutTitle'
import AboutInfo from './AboutInfo'
import AboutInfo2 from './AboutInfo2'
import AboutInfo3 from './AboutInfo3'

class AboutMe extends Component {
   
    render() { 
        return (
            <div className="about">
                <AboutTitle/>
                <div className="about-box">
                    <AboutInfo/>
                    <AboutInfo2/>
                    <AboutInfo3/>
                </div>
            </div>
        );
    }
}
 
export default AboutMe;