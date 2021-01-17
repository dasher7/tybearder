import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FaBars, FaTimes, FaPlaneDeparture } from "react-icons/fa"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import "../styles/header.css"

const Header = ({ siteTitle }) => {

  const { isMobile } = useResponsiveDetector()

  return (
    <div className="tybearder-header">

      {
        isMobile ?
        <div className='tybearder-header-wrapper-flex'>
          <div className='tybearder-header-mobile-wrapper-flex'>
            <img src={require('../images/avatar_simple.png')} className='tybearder-logo'/>
            <h1>TYBEARDER</h1>
          </div>
          <FaPlaneDeparture className={'tybearder-menu-icon'} onClick={ () => alert(1) }/>
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
