import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/header.css"
import logo from "../images/logo.png"

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
      <div className="header">
        <img id="logo" alt="tybearder-logo" src={logo} />
        <a href="/">
          <h1 id="tybearder">{siteTitle}</h1>
        </a>

        {windowsDimension.width > 750 ? (
          <ul className="header-items">
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
  siteTitle: ``,
}

{
  /**

  //eslint-disable-next-line
  const { width, height } = useWindowsDimension()
  
  const safeCheckWidth = () => {
    const safeWidth = width ? width : 1080
    return safeWidth
  }*/
}

export default Header
