import React from "react"
import { FormattedMessage } from "react-intl"
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="tybearder-footer">
      <p>
        ©{" "}
        <a href="https//www.andreabredice.dev">
          Andrea Bredice
        </a>
        , 2020. <FormattedMessage id='footer_desc_1'/> <a href="https://www.gatsbyjs.org">Gatsby</a><FormattedMessage id='footer_desc_2'/> 
      </p>
    </div>
  )
}

export default Footer
