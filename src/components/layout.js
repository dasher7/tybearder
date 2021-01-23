import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/app.css"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import { FaMediumM, FaTelegram, FaInstagram } from "react-icons/fa"
import Image from "./image"
import useIsVisible from "../hooks/useScrollHook"

const Layout = ({ children }) => {

  const { isMobile, isDesktop } = useResponsiveDetector()

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

      {
          isDesktop &&
            <>
              <div className='test-left'>
                <Image className='test-text' filename='ita.png'/>
                <Image className='test-text' filename='uk.png'/>
              </div>
              <div className='test-right'>
                <Link to='https://t.me/tybearder'>
                  <FaTelegram className='test-icon'/>
                </Link>
                <Link to='https://www.instagram.com/andrea_bredice/'>
                  <FaInstagram className='test-icon'/>
                </Link>
                <Link to='https://medium.com/@bredice.andrea'>
                  <FaMediumM className='test-icon'/>
                </Link>
              </div>

              <Header siteTitle={data.site.siteMetadata.title} />
                <div className="tybearder-blog-post-wrapper">
                  {children}
                </div>
              <Footer />

            </>
      }

      {
        isMobile &&
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
            <div className="tybearder-blog-post-wrapper">
              {children}
            </div>
            <div className='test-bottom'>
                <Image className='test-text-bottom ' filename='ita.png'/>
                <span>/</span>
                <Image className='test-text-bottom ' filename='uk.png'/>
                <hr className='divider'/>
                <Link to='https://t.me/tybearder'>
                  <FaTelegram className='test-icon'/>
                </Link>
                <span>/</span>
                <Link to='https://www.instagram.com/andrea_bredice/'>
                  <FaInstagram className='test-icon'/>
                </Link>
            </div>  
        </>
      }

      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
