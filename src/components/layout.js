import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/app.css"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import { FaArtstation, FaInstagram, FaMediumM } from "react-icons/fa"

const Layout = ({ children }) => {

  const { isMobile, isTablet, isDesktop } = useResponsiveDetector()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="tybearder-app-wrapper">

      {/* {
          isDesktop &&
            <>
              <div className='test-left'>
                <span className='test-text'>IT</span>
                <span className='test-text'>EN</span>
              </div>
              <div className='test-right'>
                <FaInstagram className='test-icon'/>
                <FaMediumM className='test-icon'/>
                <FaArtstation className='test-icon'/>
              </div>
            </>
      } */}

      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="tybearder-blog-post-wrapper">
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
