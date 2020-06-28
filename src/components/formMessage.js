import React from "react"
import { Link } from "gatsby"
import "../styles/formMessage.css"

const FormMessage = () => {
  return (
    <div class="modal-wrapper">
      <div class="modal-bg">
        <h3>
          I'm glad you say <span id="highlight">Hello</span>.
        </h3>
        <p>
          I'll answer to you as quickly as I can. <span>😉</span>{" "}
        </p>
        <p>
          <Link to="/contact">
            <span id="indication">Go Back to blog</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default FormMessage
