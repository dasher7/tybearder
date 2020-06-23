import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import useWindowsDimension from "../hooks/responsiveHook"
import { FaBars, FaTimes } from "react-icons/fa"
import "../styles/header.css"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => {
  const { width, height } = useWindowsDimension()
  const [isMenuVisible, setMenuVisible] = useState(false)
  console.log(width, height)
  return (
    <header>
      <div className="header">
        <img id="logo" alt="tybearder-logo" src={logo} />
        <h1 id="tybearder">{siteTitle}</h1>
        {width > 750 ? (
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
            <button onClick={() => setMenuVisible(!isMenuVisible)}>
              <FaBars id="highlight" />
            </button>
          </div>
        )}
        {isMenuVisible && (
          <div className="mobile-menu-container">
            <div className="mobile-menu-content">
              <button onClick={() => setMenuVisible(!isMenuVisible)}>
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

export default Header
