import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <h1>{siteTitle}</h1>
      <ul className="header-items">
        <li>
          <Link to="/podcast">Podcast</Link>
        </li>
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
