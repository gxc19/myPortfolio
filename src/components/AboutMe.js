import React, { useEffect } from "react";
import "../styles/AboutMe.css";
import AboutTitle from "./AboutTitle";
import AboutInfo from "./AboutInfo";
import AboutInfo2 from "./AboutInfo2";
import Aos from "aos";
import "aos/dist/aos.css";
import Clouds from "./Clouds";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bigContainer">
      <div className="about">
        <AboutTitle />
        <div className="infoContainer">
          <div data-aos="fade-right" className="gap">
            <AboutInfo />
          </div>
          <div data-aos="fade-left" className="gap">
            <AboutInfo2 />
          </div>
        </div>
      </div>
      <div className="svgCloud">
        <Clouds />
      </div>
    </div>
  );
};

export default AboutMe;
