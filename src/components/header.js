import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { FormattedMessage } from "react-intl"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import "../styles/header.css"
import '../styles/headermobile.css'
import Image from "./image"

const Header = ({ siteTitle }) => {

  const { isMobile, isDesktop } = useResponsiveDetector()
  const [isMobileMenu, setMenuMobile] = useState(false)

  console.log(isMobile)

  return (
    <div className="tybearder-header">

      {
        isMobile &&
        <div className='tybearder-header-wrapper-flex'>
          <div className='tybearder-header-mobile-wrapper-flex'>
          <Image filename='scarlatte_w_bg.png' className='tybearder-logo'/>
            <h1 className='tybearder-title'>Scarlatte</h1>
          </div>
          <FaBars className='tybearder-menu-icon' onClick={ () => setMenuMobile(true) }/>
        </div>
      }

      {
        isDesktop &&
        <div className='tybearder-header-wrapper-flex'>

          <div className='tybearder-image-wrapper-flex'>
            <Image filename='scarlatte_w_bg.png' className='tybearder-logo'/>
            <span className='tybearder-slogan'>Caldo da frigorifero</span>
          </div>

            <ul className="tybearder-header-navbar">
              <li>
                <Link className="tybearder-header-navbar-items" to="/">
                  <FormattedMessage id='blog'/>
                  {/* HOME */}
                </Link>
              </li>
              <span className="tybearder-header-navbar-separator"></span>
              <li>
                <Link className="tybearder-header-navbar-items" to="/podcast">
                  <FormattedMessage id='podcast'/>
                  {/* PODCAST */}
                </Link>
            </li>
            <span className="tybearder-header-navbar-separator"></span>
            <li>
                <Link className="tybearder-header-navbar-items" to="/contact">
                  <FormattedMessage id='contact'/>
                  {/* CONTACT */}
                </Link>
              </li>
              <span className="tybearder-header-navbar-separator"></span>
              <li>
                <Link className="tybearder-header-navbar-items" to="/about">
                  <FormattedMessage id='about'/>
                  {/* ABOUT */}
                </Link>
              </li>
            </ul>
        </div>
      }

      {
        isMobileMenu &&
          <div id="myNav" className="overlay">
            <FaTimes className="closebtn" onClick={() => setMenuMobile(false)}/>
            <div className="overlay-content">
              <Link onClick={() => setMenuMobile(false)} className={ `${window.location.pathname.includes('/') ? "tybearder-header-navbar-items underline" : "tybearder-header-navbar-items" }`} to="/">
                HOME
              </Link>
              <Link onClick={() => setMenuMobile(false)} className={ `${window.location.pathname.includes('/podcast') ? "tybearder-header-navbar-items underline" : "tybearder-header-navbar-items" }`} to="/podcast">
                PODCAST
              </Link>
              <Link onClick={() => setMenuMobile(false)} className={ `${window.location.pathname.includes('/contact') ? "tybearder-header-navbar-items underline" : "tybearder-header-navbar-items" }`} to="/contact">
                CONTACT
              </Link>
              <Link onClick={() => setMenuMobile(false)} className={ `${window.location.pathname.includes('/about') ? "tybearder-header-navbar-items underline" : "tybearder-header-navbar-items" }`} to="/about">
                ABOUT
              </Link>
            </div>
          </div>
      }  

    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Tybearder`,
}

export default Header
