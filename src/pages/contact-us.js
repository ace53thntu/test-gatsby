import React from 'react'
import Header from '../components/Header'
import { useForm } from 'react-hook-form'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import footerLogo from '../images/footer-logo.png'
import '../styles/layout.css'
import '../styles/responsive.css'
import API from '@aws-amplify/api'
import swal from '@sweetalert/with-react'

export default function ContactUs() {
  const { handleSubmit, register, reset } = useForm()

  const onSubmit = async data => {
    try {
      await API.post('leads', '/leads', {
        body: data,
      })
      swal(
        'Success!',
        `We received your message ${data.name.substring(
          0,
          data.name.indexOf(' ')
        )} and we'll be in touch ASAP.`,
        'success',
        {
          buttons: false,
          timer: 7000,
        }
      )
      reset()
    } catch (e) {
      swal(
        'Oh no!',
        'Something went wrong. Please email us directly at info@cloud.solar.',
        'error',
        {
          buttons: false,
          timer: 7000,
        }
      )
      reset()
    }
  }

  return (
    <div id="wrapper">
      <Header />
      <section className="inner banner-section">
        <div className="container">
          <div className="caption">
            <h1>GET IN TOUCH</h1>
            <p>
              Questions? Comments? Give us a call, send us a note or let's chat.
            </p>
          </div>
        </div>
      </section>
      <section className="how-it-works-section solar-installations">
        <div className="container">
          <div className="contact-bg">
            <div className="contact-block">
              <div className="content-left" style={{ padding: 16 }}>
                <h2 className="title-left">
                  DROP US <span>A NOTE</span>
                </h2>
                {/* <strong>What's on your mind?</strong> */}
                <div className="form-wrap">
                  <form
                    id="contact-inquiry"
                    method="post"
                    name="contactenquiryform"
                    className="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="field full-raw">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="contactForm"
                        placeholder=" "
                        ref={register({
                          required: 'Required',
                        })}
                        style={{ padding: 20, fontSize: 20 }}
                      />
                      <label htmlFor="name" className="floating-label">
                        Name<sup>*</sup>
                      </label>
                    </div>
                    <div className="field full-raw">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        className="contactForm"
                        ref={register({
                          required: 'Required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid email address',
                          },
                        })}
                        style={{ padding: 20, fontSize: 20 }}
                      />
                      <label htmlFor="email" className="floating-label">
                        Email Address<sup>*</sup>
                      </label>
                    </div>
                    <div className="field full-raw">
                      <textarea
                        name="message"
                        id="message"
                        className="contactDetails"
                        placeholder=" "
                        ref={register({
                          required: 'Required',
                        })}
                        style={{ padding: 20, fontSize: 20 }}
                      ></textarea>
                      <label className="floating-label" htmlFor="message">
                        Details<sup>*</sup>
                      </label>
                      <span className="message-msg"></span>
                    </div>
                    <div className="google-submit">
                      <div className="submit-btn-wrap read_btn all-btn ">
                        <div className="button wrap-input">
                          <input
                            type="submit"
                            value="SUBMIT"
                            className="con_btn2"
                            name="btnsubmit"
                          />
                        </div>
                        {/* <div style={{ display: 'none' }} id="loader2">
                        <img alt="loading" src={loader} />
                      </div> */}
                      </div>
                      <div className="message">
                        <div id="result2"></div>
                        <div style={{ display: 'none' }} id="error">
                          One or more fields have an error. Please check and try
                          again.
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                className="content-right"
                style={{ marginBottom: 20, padding: 16 }}
              >
                <h2 className="title-left">
                  LET'S CHAT<span> OR TALK</span>
                </h2>
                <div id="content">
                  {/* <Typography variant="body1" gutterBottom>
                    We are here to chat Monday-Friday from 8AM-4PM. Click the
                    button below to chat with us.
                  </Typography> */}
                  <p style={{ marginBottom: 20, padding: 16 }}>
                    We are here to chat Monday-Friday from 8AM-4PM. Click the
                    button below to chat with us.
                  </p>
                </div>
                <div className="submit-btn-wrap read_btn all-btn">
                  <div className="button wrap-input">
                    <Link to="/contact-us#hs-chat-open">
                      <input
                        type="submit"
                        value="LET'S CHAT"
                        className="con_btn2"
                        name="btnsubmit"
                      />
                    </Link>
                  </div>
                </div>
                <p style={{ marginTop: 20 }}>
                  Prefer to talk on the phone? Give us a call on
                  +1(246)418-8088.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact-footer">
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
                    href="https://twitter.com/login"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/login"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="second-col">
              <h5>MAIN LINKS</h5>
              <ul className="menu-link">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/how-it-works/">How It Works</Link>
                </li>
                <li>
                  <Link to="/about-us/">About Us</Link>
                </li>
                <li>
                  <Link to="/our-projects/">Our Projects</Link>
                </li>
                <li>
                  <Link to="/contact-us/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="third-col">
              <h5>OTHER LINKS</h5>
              <ul className="menu-link">
                <li>
                  <Link to="/privacy/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms/">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/get-started/">Get Started</Link>
                </li>
                <li>
                  <Link to="/questions/">Questions</Link>
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
                  <a href="tel:1234567890">+1(246)418-8088</a>
                </li>
                <li>
                  <i className="fa fa-envelope">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <a href="mailto:info@cloudsolar.com">info@cloudsolar.com</a>
                </li>
              </ul>
            </div>
            <div className="fifth-col">
              <h5>ABOUT US</h5>
              <p>
                CloudSolar is the Caribbean's 1st Green Technology company that
                allows users to purchase a solar system digitally. We enable our
                clients to invest in the solar industry, while removing all the
                barriers that come along with owning a physical Solar PV system.
                Our well managed, sustainable and efficient solar PV portfolio,
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
    </div>
  )
}
