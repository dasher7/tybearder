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
    <div className="wrapper-about-card">
      <img alt="profile" src={profile} className="wrapper-image-round" />
      <div className="wrapper-about-card-column">
        <h3>Hope you enjoyed reading!</h3>
        <h4>Come to say hello, you can find me here:</h4>
        <div>
          <ul className="wrapper-icon-item">
            <li>
              <Link to="https://www.andreabredice.dev/">
                <FaGlobeEurope />
              </Link>
            </li>
            <li>
              <Link to="https://medium.com/@bredice.andrea">
                <FaMediumM />
              </Link>
            </li>
            <li>
              <Link to="https://www.artstation.com/andrea_bredice">
                <FaArtstation />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/andrea_bredice/">
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/dasher7">
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link to="https://dev.to/dasher7">
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
