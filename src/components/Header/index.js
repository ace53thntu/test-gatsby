/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const handleScroll = useCallback(() => {
    var sticky = document.getElementById('header')
    if (window.scrollY > 70) {
      sticky.classList.add('fixed')
    } else {
      sticky.classList.remove('fixed')
    }
  }, [])

  let host = ''
  if (
    (typeof window !== 'undefined' &&
      window.location.hostname === 'localhost') ||
    (typeof window !== 'undefined' && window.location.hostname === '127.0.0.1')
  ) {
    host = 'http://localhost:3000'
  } else {
    host = 'https://app.cloud.solar'
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const addClass = () => {
    var body = document.getElementsByTagName('html')[0]
    body.classList.toggle('show-menu')
  }

  const removeClass = () => {
    var body = document.getElementsByTagName('html')[0]
    body.classList.remove('show-menu')
  }

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="header-top">
            <div className="left">
              <div className="left logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="right">
              <div className="menu" onClick={addClass}>
                <div className="menu-trigger">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
              </div>
              <nav className="menu-act">
                <div className="close-button" onClick={removeClass}>
                  <FontAwesomeIcon icon={faTimes} className="fa fa-times" />
                </div>
                <ul>
                  <li>
                    <Link
                      activeStyle={{ color: '#fab115' }}
                      to="/how-it-works/"
                      onClick={() =>
                        document
                          .getElementsByTagName('html')[0]
                          .classList.remove('show-menu')
                      }
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeStyle={{ color: '#fab115' }}
                      to="/about-us/"
                      onClick={() =>
                        document
                          .getElementsByTagName('html')[0]
                          .classList.remove('show-menu')
                      }
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeStyle={{ color: '#fab115' }}
                      to="/our-projects/"
                      onClick={() =>
                        document
                          .getElementsByTagName('html')[0]
                          .classList.remove('show-menu')
                      }
                    >
                      Our Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeStyle={{ color: '#fab115' }}
                      to="/questions/"
                      onClick={() =>
                        document
                          .getElementsByTagName('html')[0]
                          .classList.remove('show-menu')
                      }
                    >
                      Questions?
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeStyle={{ color: '#fab115' }}
                      to="/contact-us/"
                      onClick={() =>
                        document
                          .getElementsByTagName('html')[0]
                          .classList.remove('show-menu')
                      }
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="last-btn login-m">
                    <a
                      href={`${host}/login/`}
                      className="button login"
                      onClick={() =>
                        document
                          .getElementsByTagName('html')[0]
                          .classList.remove('show-menu')
                      }
                    >
                      LOGIN
                    </a>
                  </li>
                  <li className="last-btn get-m">
                    <a
                      href={`${host}/get-started/`}
                      className="button get-started"
                      onClick={() =>
                        document
                          .getElementsByTagName('html')[0]
                          .classList.remove('show-menu')
                      }
                    >
                      GET STARTED
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
