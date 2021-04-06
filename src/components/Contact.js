import React, { useEffect } from "react";
import ContactTitle from "./ContactTitle";
import Clouds from "./Clouds"
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="bigContainer">
      <div className="mainContent">
        <ContactTitle />
        <div className="contact-info">
          <div data-aos="fade-down" className="contact-box">
            <p className="cInfo">
              If you have any questions, feel free to reach out to me via
              LinkedIn or email.
            </p>
            <p className="cInfo">
              Alternatively, you can come and check out my Github repositories.
            </p>
          </div>
          <div className="contact-logos">
            <a
              data-aos="fade-right"
              href="https://www.linkedin.com/in/gmchan19/"
              className="linkedIn"
            >
              <div id="linkedInLogo" className="contact">
                <FontAwesomeIcon icon={faLinkedin} size="9x" />
                <div className="linkedIn2"></div>
              </div>
            </a>
            <a
              data-aos="fade-up"
              href="mailto:gmchan19@gmail.com"
              className="email"
            >
              <div id="emailLogo" className="contact">
                <FontAwesomeIcon icon={faEnvelopeOpenText} size="9x" />
                <div className="email2"></div>
                <div className="email3"></div>
              </div>
            </a>
            <a
              data-aos="fade-left"
              href="https://github.com/gxc19"
              className="github"
            >
              <div id="githubLogo" className="contact">
                <FontAwesomeIcon icon={faGithub} size="9x" />
                <div className="github2"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="svgCloud">
        <Clouds/>
      </div>
    </div>
  );
};

export default Contact;
