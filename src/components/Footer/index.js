import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  // faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import footerLogo from '../../images/footer-logo.png'

export default function Footer(props) {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="first-col">
              <div className="footer-logo">
                <a href="index.html">
                  <img src={footerLogo} alt="Logo" />
                </a>
              </div>
              <ul className="social-icon">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/cloud.solar"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/barbadossolar"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/cloudsolarbb/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="second-col">
              <h5>MAIN LINKS</h5>
              <ul className="menu-link">
                <li>
                  <Link to="/" activeStyle={{ color: '#fab115' }}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works/" activeStyle={{ color: '#fab115' }}>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/about-us/" activeStyle={{ color: '#fab115' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/our-projects/" activeStyle={{ color: '#fab115' }}>
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us/" activeStyle={{ color: '#fab115' }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="third-col">
              <h5>OTHER LINKS</h5>
              <ul className="menu-link">
                <li>
                  <Link to="/privacy/" activeStyle={{ color: '#fab115' }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms/" activeStyle={{ color: '#fab115' }}>
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <a
                    href="https://app.cloud.solar/get-started/"
                    activeStyle={{ color: '#fab115' }}
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <Link to="/questions/" activeStyle={{ color: '#fab115' }}>
                    Questions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="fourth-col">
              <h5>CONTACT DETAILS</h5>
              <ul>
                <li>
                  <i className={faMapMarker}>
                    <FontAwesomeIcon icon={faMapMarker} />
                  </i>
                  <p>Highway 7, Maxwell, Christ Church, Barbados</p>
                </li>
                <li>
                  <i className="fa fa-phone">
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <a href="tel:+1(246)418-8088">+1(246)418-8088</a>
                </li>
                <li>
                  <i className="fa fa-envelope">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <a href="mailto:info@cloud.solar">info@cloud.solar</a>
                </li>
              </ul>
            </div>
            <div className="fifth-col">
              <h5>ABOUT US</h5>
              <p>
                CloudSolar is the Caribbean's 1st Green Technology company that
                allows users to purchase solar panels digitally. We enable our
                clients to invest in the solar industry, while removing all the
                barriers that come along with owning a physical Solar PV system.
                Our well managed, sustainable and efficient Solar PV portfolio,
                generates solar energy that we pool together via our cloud
                platform and sell on behalf of our clients to the utility
                company.
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              CloudSolar Inc. (Company #44356 incorporated under the laws of
              Barbados) Copyright 2020-2025. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
