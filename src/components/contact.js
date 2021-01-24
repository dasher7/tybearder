import React from "react"
import "../styles/contact.css"
import { Link } from "gatsby"
import { FaArtstation, FaDev, FaGithub, FaGlobeEurope, FaInstagram, FaMediumM } from "react-icons/fa"
import { FormattedMessage } from "react-intl"

const Contact = () => {
  return (
    <div className="tybearder-contact-wrapper">
      <h1 className='tybearder-contact-title'>
        <FormattedMessage id='contact_title'/>
      </h1>
      <div className='tybearder-contact-social-icon-wrapper'>
          <Link className='tybearder-contact-social-icon' to='./'>
            <FaGlobeEurope />
          </Link>
          <Link className='tybearder-contact-social-icon' to='./'>
            <FaMediumM />
          </Link>
          <Link className='tybearder-contact-social-icon' to='./'>
            <FaArtstation />
          </Link>
          <Link className='tybearder-contact-social-icon' to='./'>
            <FaInstagram />
          </Link>
          <Link className='tybearder-contact-social-icon' to='./'>
            <FaGithub />
          </Link>
          <Link className='tybearder-contact-social-icon' to='./'>
            <FaDev />
          </Link>
      </div>
      <div className='tybearder-contact-description-wrapper'>
        <FormattedMessage id='contact_desc'/>
        {/* <p>
          Hello everyone! I'm really glad you reached the contact page, it must be because you wanna say hello! That's awesome.
          <br/>
          Let me tell you something: I may be an introspective person, I usually don't speak so much, and that's funny because I do host a podcast. But I always define my self a great listener instead of a huge speaker.
          Irony, I guess. But let's get serious. I love social medias for many reasons: first they allow you to talk without speak, so I can share something without the very little effort and I can always choose keep some little secret.
          Then, I love social media because they allow you to keep in touch with friends and meet tons of new people that can improve yourself sharing their thought. This is just fantastic!
          <br/>
          So, be short: if you wanna know me more, text me, i'll surely answer you or just come to know me more, you con find me on the social above or you can just write me an e-mail with the form below.
        </p> */}
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
                Your Name: <br />
                <input className='tybearder-contact-form-item' label='name' aria-label="name" type="text" name="name" />
              </span>

              <span className='tybearder-contact-form-label'>
                Your Email: <br />
                <input className='tybearder-contact-form-item' aria-label="email" type="text" name="name" />
              </span>

              <span className='tybearder-contact-form-label'>
                Your Message:
                <br />
                <input className='tybearder-contact-form-item' type="text" aria-label="message" name="message"></input>
              </span>

              <button className='tybearder-contact-form-button' type="submit">Send</button>

            </div>
            
          </form>
        </div>
    </div>
  )
}

export default Contact
