import React from "react"
import "../styles/contact.css"
import { Link } from "gatsby"
import { FaArtstation, FaDev, FaGithub, FaGlobeEurope, FaInstagram, FaMediumM, FaSpotify, FaTelegram } from "react-icons/fa"
import { FormattedMessage } from "react-intl"

const Contact = () => {
  return (
    <div className="tybearder-contact-wrapper">
      <h1 className='tybearder-contact-title'>
        {/* <FormattedMessage id='contact_title'/> */}
      </h1>
      <div className='tybearder-contact-social-icon-wrapper'>
          <Link className='tybearder-contact-social-icon' to='https://t.me/tybearder'>
            <FaTelegram className='tybearder-contact-social-icon-fa'/>
          </Link>
          <Link className='tybearder-contact-social-icon' to='https://open.spotify.com/show/6SR26ieg3rGowH22ECxFd3?si=3SHKondHSruPk4gcKALeBg'>
            <FaSpotify className='tybearder-contact-social-icon-fa'/>
          </Link>
          <Link className='tybearder-contact-social-icon' to='https://www.instagram.com/andrea_bredice/'>
            <FaInstagram className='tybearder-contact-social-icon-fa'/>
          </Link>
          <Link className='tybearder-contact-social-icon' to='https://medium.com/@bredice.andrea'>
            <FaMediumM className='tybearder-contact-social-icon-fa'/>
          </Link>
      </div>
      <div className='tybearder-contact-description-wrapper'>
        <FormattedMessage id='contact_desc_1'/>
        <br/>
        <br/>
        <FormattedMessage id='contact_desc_2'/>
        <br/>
        <br/>
        <FormattedMessage id='contact_desc_3'/>
        <br/>
        <br/>
        <FormattedMessage id='contact_desc_4'/>

      </div>
        <div className="tybearder-contact-form-wrapper">
          <form
            className='tybearder-contact-form'
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="Contact me"
            action="/thanks"
          >
            <input
              aria-label="hidden-netlify-label"
              type="hidden"
              name="bot-field"
            />
            <input
              aria-label="hidden-netlify-label"
              type="hidden"
              name="form-name"
              value="contact"
            />


            <div className='tybearder-contact-form-grid'>

            <span className='tybearder-contact-form-label'>
            <FormattedMessage id='form_name'/> <br />
                <input className='tybearder-contact-form-item' label='name' aria-label="name" type="text" name="name" />
              </span>

              <span className='tybearder-contact-form-label'>
                <FormattedMessage id='form_mail'/> <br />
                <input className='tybearder-contact-form-item' aria-label="email" type="text" name="name" />
              </span>

              <span className='tybearder-contact-form-label'>
              <FormattedMessage id='form_text'/>
                <br />
                <input className='tybearder-contact-form-item' type="text" aria-label="message" name="message"></input>
              </span>

              <button className='tybearder-contact-form-button' type="submit"><FormattedMessage id='form_send'/></button>

            </div>
            
          </form>
        </div>
    </div>
  )
}

export default Contact
