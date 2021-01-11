import React from "react"
import "../styles/postcard.css"

const Postcard = ({ index, author, title, desc, path, image }) => {
  const imagesPaths = {
    turin: require("../images/turin.jpg"),
    dreams: require("../images/test_2.png"),
    echo: require("../images/test4.png"),
    adventure: require("../images/adventure.jpg"),
    cycle: require("../images/test_2.png"),
    trieste: require("../images/test_3.png"),
    copenaghen: require("../images/test_1.png"),
    logo: require("../images/logo_2.png"),
  }

  return (
    <div className='tybearder-postcard-wrapper-bis'>
        <img src={imagesPaths[image]} className='shadow' style={{ width: 400, height: 360 }} />
      <div className='tybearder-postcard'>
        <h3>{title.toUpperCase()}</h3>
      </div>
    </div>
  )
}

export default Postcard
