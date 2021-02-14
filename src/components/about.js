import React from "react"
import "../styles/about.css"
import profile from "../images/profile_color.png"
import LeafletMap from "./leafletmap" 
import Image from "./image"
import { FormattedMessage } from "react-intl"

const About = () => {

  return (
    <div className='tybearder-about-wrapper'>
      <h1 className='tybearder-about-title'>
      </h1>
      <div className='tybearder-about-image-desc-grid'>
        <div className='tybearder-about-description-image'>
          <Image alt="profile" className="tybearder-about-profile-image" filename={'profile_color.png'}/>
          </div>
          <div className='tybearder-about-description-content'>
            <FormattedMessage id="about_desc_1"/>
            <br/>
            <br/>
            <FormattedMessage id="about_desc_2"/>
            <br/>
            <br/>
            <FormattedMessage id="about_desc_3"/>
            <br/>
            <br/>
            <FormattedMessage id="about_desc_4"/>
            <br/>
            <br/>
            <FormattedMessage id="about_desc_5"/>
            <br/>
            <br/>
            <FormattedMessage id="about_desc_6"/>
          </div>
      </div>
      <hr className='tybearder-about-divider'/>
      <div className='tybearder-about-map'>
        {typeof window !== 'undefined' &&
          <LeafletMap
            position={[45.8,9.08]}
            zoom={10}
            markerText={"Ciao, attualmente (forse) sono qui :)"}
          />
        }
      </div>
      <hr className='tybearder-about-divider'/>
      <div className='tybearder-about-desc-grid'>
        <div className='tybearder-about-description-content'>
          <FormattedMessage id='about_desc_7'/>
          <br/>
          <FormattedMessage id='about_desc_8'/>
          <br/>
          <FormattedMessage id='about_desc_9'/>
        </div>
      </div>
    </div>
  )
}

export default About
