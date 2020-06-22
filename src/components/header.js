import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"
import logo from "../images/logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <img id="logo" alt="tybearder-log0" src={logo} />
      <h1 id="tybearder">{siteTitle}</h1>
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
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
