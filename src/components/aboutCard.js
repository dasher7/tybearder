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
              <FaGlobeEurope />
            </li>
            <li>
              <FaMediumM />
            </li>
            <li>
              <FaArtstation />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaDev />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
