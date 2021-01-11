import React from "react"
import profile from "../images/profile.jpg"
import {
  FaGlobeEurope,
  FaMediumM,
  FaArtstation,
  FaInstagram,
  FaGithub,
  FaDev,
} from "react-icons/fa"
import "../styles/aboutcard.css"
import { Link } from "gatsby"

const AboutCard = () => {
  return (
    <div className="tybearder-about-card">
      <img alt="profile" src={profile} className="tybearder-about-card-image" />
      <div className="tybearder-about-card-description">
        <h3>Hope you enjoyed reading!</h3>
        <h4>Come to say hello, you can find me here:</h4>
        <div>
          <ul className="tybearder-about-card-social-links">
            <li>
              <Link className='tybearder-about-card-social-links-icon' to="https://www.andreabredice.dev/">
                <FaGlobeEurope />
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to="https://medium.com/@bredice.andrea">
                <FaMediumM />
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to="https://www.artstation.com/andrea_bredice">
                <FaArtstation />
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to="https://www.instagram.com/andrea_bredice/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to="https://github.com/dasher7">
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link className='tybearder-about-card-social-links-icon' to="https://dev.to/dasher7">
                <FaDev />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
