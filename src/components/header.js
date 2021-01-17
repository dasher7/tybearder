import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FaGlobeEurope, FaSuitcaseRolling } from "react-icons/fa"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import "../styles/header.css"
import '../styles/headermobile.css'

const Header = ({ siteTitle }) => {

  const { isMobile } = useResponsiveDetector()
  const [isMobileMenu, setMenuMobile] = useState(false)

  return (
    <div className="tybearder-header">

      {
        isMobile ?
        <div className='tybearder-header-wrapper-flex'>
          <div className='tybearder-header-mobile-wrapper-flex'>
            <img src={require('../images/avatar_simple.png')} className='tybearder-logo'/>
            <h1>TYBEARDER</h1>
          </div>
          <FaGlobeEurope className={'tybearder-menu-icon'} onClick={ () => setMenuMobile(true) }/>
        </div> :

        <div className='tybearder-header-wrapper-flex'>
            <ul className="tybearder-header-navbar">
              <li>
                <Link className="tybearder-header-navbar-items" to="/">
                  HOME
                </Link>
              </li>
              <span className="tybearder-header-navbar-separator"></span>
              <li>
                <Link className="tybearder-header-navbar-items" to="/podcast">
                  PODCAST
                </Link>
              </li>
            </ul>
              <img src={require('../images/avatar_simple.png')} className='tybearder-logo'/>
            <ul className="tybearder-header-navbar">
              <li>
                <Link className="tybearder-header-navbar-items" to="/contact">
                  CONTACT
                </Link>
              </li>
              <span className="tybearder-header-navbar-separator"></span>
              <li>
                <Link className="tybearder-header-navbar-items" to="/about">
                  ABOUT
                </Link>
              </li>
            </ul>
        </div>
      }

      {
        isMobileMenu &&
          <div id="myNav" className="overlay">
            <FaSuitcaseRolling className="closebtn" onClick={() => setMenuMobile(false)}/>
            <div className="overlay-content">
              <Link onClick={() => setMenuMobile(false)} className="tybearder-header-navbar-items" to="/">
                HOME
              </Link>
              <Link onClick={() => setMenuMobile(false)} className="tybearder-header-navbar-items" to="/podcast">
                PODCAST
              </Link>
              <Link onClick={() => setMenuMobile(false)} className="tybearder-header-navbar-items" to="/contact">
                CONTACT
              </Link>
              <Link onClick={() => setMenuMobile(false)} className="tybearder-header-navbar-items" to="/about">
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
