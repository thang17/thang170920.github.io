import React from "react";
import "./home.css";
import logo from "../../../img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faClock} from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="col l-4">
              <div className="header__logo">
                <a href="#" className="header__logo-link">
                  <img
                    src={logo}
                    alt
                    className="header__logo-img"
                  />
                </a>
                <span className="header__logo-text">Welcome to MocFood </span>
              </div>
            </div>
            <div className="col l-8">
              <div className="header__contact-container">
                <div className="header__contact">
                  <div className="header__contact-icon">
                  <i><FontAwesomeIcon icon={faClock} /></i>
                  </div>
                  <div className="header__contact-content">
                    <span className="header__contact-title">open:</span>
                    <span href="#" className="header__contact-in4">
                      8 AM - 10 PM
                    </span>
                  </div>
                </div>
                <div className="header__contact">
                  <div className="header__contact-icon">
                  <i><FontAwesomeIcon icon={faEnvelope} /></i>
                  </div>
                  <div className="header__contact-content">
                    <span className="header__contact-title">email:</span>
                    <a href="#" className="header__contact-in4">
                      thangldph10527@fpt.edu.vn
                    </a>
                  </div>
                </div>
                <div className="header__contact">
                  <div className="header__contact-icon">
                    <i><FontAwesomeIcon icon={faPhone} /></i>
                  </div>
                  <div className="header__contact-content">
                    <span className="header__contact-title">hotline:</span>
                    <a href="#" className="header__contact-in4">
                      1900 6868
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
