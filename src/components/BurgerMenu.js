import React, { Component } from "react";
import "../styles/BurgerMenu.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class BurgerMenu extends Component {
  state = {
    menuOpen: false,
  };

  menuClickHandler = () => {
    this.setState((prevstate) => {
      return { menuOpen: !prevstate.menuOpen };
    });
  };

  menuCloseHandler = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    let menuClass = ["menu-line", "menu-line2", "menu-line3"];
    if (this.state.menuOpen) {
      menuClass = ["menu-line open", "menu-line2 open", "menu-line3 open"];
    }

    return (
      <div className="menuContainer">
        <button className="menu" onClick={this.menuClickHandler}>
          <div className={menuClass[0]} />
          <div className={menuClass[1]} />
          <div className={menuClass[2]} />
        </button>
        <div className="menuBtn">
          <div
            className={this.state.menuOpen ? "show" : "none"}
            onClick={this.menuCloseHandler}
          >
            <Link to="/" className="burgerLink">
              <div className="homeIcon">
                <FontAwesomeIcon icon={faHome} size="lg" className="icon" />
              </div>
            </Link>
          </div>

          <div
            className={this.state.menuOpen ? "show2" : "none"}
            onClick={this.menuCloseHandler}
          >
            <Link to="/aboutme" className="burgerLink">
              <div className="userIcon">
                <FontAwesomeIcon icon={faUser} size="lg" className="icon" />
              </div>
            </Link>
          </div>

          <div
            className={this.state.menuOpen ? "show3" : "none"}
            onClick={this.menuCloseHandler}
          >
            <Link to="/portfolio" className="burgerLink">
              <div className="portIcon">
                <FontAwesomeIcon icon={faFolder} size="lg" className="icon" />
              </div>
            </Link>
          </div>

          <div
            className={this.state.menuOpen ? "show4" : "none"}
            onClick={this.menuCloseHandler}
          >
            <Link to="/contact" className="burgerLink">
              <div className="contactIcon">
                <FontAwesomeIcon icon={faPhone} size="lg" className="icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
