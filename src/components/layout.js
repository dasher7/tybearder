import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../styles/app.css"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import { FaMediumM, FaTelegram, FaInstagram, FaSpotify } from "react-icons/fa"
import Image from "./image"
import useIsVisible from "../hooks/useScrollHook"
// import { Context } from "react-responsive"
import it from 'react-intl/locale-data/it'
import en from 'react-intl/locale-data/en'
import { addLocaleData, IntlProvider } from 'react-intl'
import Provider from '../context/Provider'
import {Context} from '../context/Context'
import localEng from '../intl/en.json'
import localeIt from '../intl/it.json'

addLocaleData(it, en)

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
              <Provider>
                <Context.Consumer>
                  {
                    ({lang, toggleLanguage}) => (
                      <IntlProvider locale={lang} messages={lang === 'en' ? localEng : localeIt}>
                        <>
                          {/* <div className='test-left' onClick={toggleLanguage}>
                            <div className='test-text' onClick={toggleLanguage}>
                              <Image filename='ita.png'/>
                            </div>
                            <div className='test-text' onClick={toggleLanguage}>
                              <Image filename='uk.png'/>
                            </div>
                          </div> */}
                          {/* <div className='test-right'>
                            <Link to='https://t.me/tybearder'>
                              <FaTelegram className='test-icon'/>
                            </Link>
                            <Link to='https://open.spotify.com/show/6SR26ieg3rGowH22ECxFd3?si=n7fvAdKJQyOvU1aqRhg--g'>
                              <FaSpotify className='test-icon'/>
                            </Link>
                            <Link to='https://www.instagram.com/andrea_bredice/'>
                              <FaInstagram className='test-icon'/>
                            </Link>
                            <Link to='https://medium.com/@bredice.andrea'>
                              <FaMediumM className='test-icon'/>
                            </Link>
                          </div> */}

                          <Header siteTitle={data.site.siteMetadata.title} />
                            <div className="tybearder-blog-post-wrapper">
                              {children}
                            </div>
                          <Footer />
                        </>
                      </IntlProvider>
                    )
                  }
                </Context.Consumer>
              </Provider>
            </>
      }

      {
        isMobile &&
        <>
          <Provider>
            <Context.Consumer>
              {
                ({lang, toggleLanguage}) => (
                     <IntlProvider locale={lang} messages={lang === 'en' ? localEng : localeIt}>
                       <>
                       <Header siteTitle={data.site.siteMetadata.title} />
                        <div className="tybearder-blog-post-wrapper">
                          {children}
                        </div>
                        {/* <div className='test-bottom'> */}
                            {/* <div className='test-text-bottom' onClick={toggleLanguage}>
                              <Image filename='ita.png'/>
                            </div>
                            <span>/</span>
                            <div className='test-text-bottom' onClick={toggleLanguage}>
                              <Image filename='uk.png'/>
                            </div> */}
                            {/* <hr className='divider'/> */}
                            {/* <Link to='https://open.spotify.com/show/6SR26ieg3rGowH22ECxFd3?si=n7fvAdKJQyOvU1aqRhg--g'>
                              <FaSpotify className='test-icon'/>
                            </Link>
                            <span>/</span>
                            <Link to='https://t.me/tybearder'>
                              <FaTelegram className='test-icon'/>
                            </Link>
                            <span>/</span>
                            <Link to='https://www.instagram.com/andrea_bredice/'>
                              <FaInstagram className='test-icon'/>
                            </Link> */}
                        {/* </div>   */}
                       </>
                     </IntlProvider>
                )
              }
            </Context.Consumer>
          </Provider>
        </>
      }

      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
