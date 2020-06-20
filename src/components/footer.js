import React from "react"
import "../styles/footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <p>
        ©{" "}
        <a id="highlight" href="https//www.andreabredice.dev">
          Andrea Bredice
        </a>
        , 2020. Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and
        hosted with love thanks to Netlify.
      </p>
    </div>
  )
}

export default Footer