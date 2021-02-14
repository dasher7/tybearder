import React from "react"
import profile from "../images/profile_color.png"
import {
  FaGlobeEurope,
  FaMediumM,
  FaArtstation,
  FaInstagram,
  FaGithub,
  FaDev,
  FaTelegram,
  FaSpotify,
} from "react-icons/fa"
import "../styles/aboutcard.css"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"

const AboutCard = () => {
  return (
    <div className="tybearder-about-card">
      <img alt="profile" src={profile} className="tybearder-about-card-image" />
      <div className="tybearder-about-card-description">
        <h3><FormattedMessage id='about_card_title'/> </h3>
        <h4><FormattedMessage id='about_card_subtitle'/></h4>
        <div>
          <ul className="tybearder-about-card-social-links">
            <li>
              <Link className='tybearder-about-card-social-links-icon' to='https://t.me/tybearder'>
                <FaTelegram className='tybearder-about-card-social-links-icon-fa'/>
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to='https://open.spotify.com/show/6SR26ieg3rGowH22ECxFd3?si=3SHKondHSruPk4gcKALeBg'>
                <FaSpotify className='tybearder-about-card-social-links-icon-fa'/>
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to='https://www.instagram.com/andrea_bredice/'>
                <FaInstagram className='tybearder-about-card-social-links-icon-fa'/>
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to='https://medium.com/@bredice.andrea'>
                <FaMediumM className='tybearder-about-card-social-links-icon-fa'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
