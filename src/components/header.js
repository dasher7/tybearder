import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/header.css"

const Header = ({ siteTitle }) => {
  const [windowsDimension, setWindowsDimension] = useState({})
  const [isMenuVisible, setMenuVisible] = useState(false)
  const [isMobileMenuActive, setMenuMobileActive] = useState(true)

  function getWindowSize() {
    const { innerHeight: height, innerWidth: width } = window

    return {
      height,
      width,
    }
  }

  useEffect(() => {
    setWindowsDimension(getWindowSize())
    function handleResize() {
      setWindowsDimension(getWindowSize())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  console.log(windowsDimension.width)

  return (
    <header>
      <div className="tybearder-header">
        <a href="/">
          <h1 className='tybearder-header-title'>{siteTitle.toUpperCase()}</h1>
        </a>

        {windowsDimension.width > 750 ? (
          <ul className="tybearder-header-navbar">
            <li>
              <Link className="tybearder-header-navbar-items" to="/">HOME</Link>
            </li>
            <li className="tybearder-header-navbar-items">/</li>
            <li>
              <Link className="tybearder-header-navbar-items" to="/contact">CONTACT</Link>
            </li>
            <li className="tybearder-header-navbar-items">/</li>
            <li>
              <Link className="tybearder-header-navbar-items" to="/about">ABOUT</Link>
            </li>
          </ul>
        ) : (
          <div className="header-items-button">
            <button
              onClick={() => {
                setMenuVisible(!isMenuVisible)
                setMenuMobileActive(false)
              }}
            >
              {isMobileMenuActive && <FaBars id="highlight" />}
            </button>
          </div>
        )}
        {isMenuVisible && (
          <div className="mobile-menu-container">
            <div className="mobile-menu-content">
              <button
                onClick={() => {
                  setMenuVisible(!isMenuVisible)
                  setMenuMobileActive(true)
                }}
              >
                <FaTimes id="highlight" />
              </button>
              <ul className="mobile-menu-content-items">
                <li>
                  <Link to="/">Home</Link>
                </li>
                {/**  <li>
          <Link to="/podcast">Podcast</Link>
        </li> */}

                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Tybearder`,
}

export default Header
