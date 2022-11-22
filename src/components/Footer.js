import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="Logo" className="footer__logo--img" />
        </div>
        <div className="footer__container">
          <div className="footer__contact">
            <div className="footer__contact--location">
              <div className="footer__contact--location-icon">
                <img
                  src={location}
                  alt="Location-icon"
                  className="footer__contact--location-icon-img"
                />
              </div>
              <p className="footer__contact--location-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="footer__contact--phone">
              <div className="footer__contact--phone-icon">
                <img
                  src={phone}
                  alt="Phone-icon"
                  className="footer__contact--phone-icon-img"
                />
              </div>
              <p className="footer__contact--phone-info">+1-543-123-4567</p>
            </div>
            <div className="footer__contact--email">
              <div className="footer__contact--email-icon">
                <img
                  src={email}
                  alt="Email-icon"
                  className="footer__contact--email-icon-img"
                />
              </div>
              <p className="footer__contact--email-info">example@fylo.com</p>
            </div>
          </div>
          <nav className="footer__nav">
            <div className="footer__nav--col1">
              <a href="#0" className="footer__nav--col1-link">
                About Us
              </a>
              <a href="#0" className="footer__nav--col1-link">
                Jobs
              </a>
              <a href="#0" className="footer__nav--col1-link">
                Press
              </a>
              <a href="#0" className="footer__nav--col1-link">
                Blog
              </a>
            </div>
            <div className="footer__nav--col2">
              <a href="#0" className="footer__nav--col2-link">
                Contact Us
              </a>
              <a href="#0" className="footer__nav--col2-link">
                Terms
              </a>
              <a href="#0" className="footer__nav--col2-link">
                Privacy
              </a>
            </div>
          </nav>
          <div className="footer__social">
            <FontAwesomeIcon
              className="footer__social--icon"
              icon={faFacebookF}
            />
            <FontAwesomeIcon
              className="footer__social--icon"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="footer__social--icon"
              icon={faInstagram}
            />
          </div>
        </div>
      </div>
    </>
  );
}
