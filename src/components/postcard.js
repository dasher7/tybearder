import React from "react"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import "../styles/postcard.css"

const Postcard = ({ index, author, title, desc, path, image }) => {

  const { isMobile } = useResponsiveDetector()

  const imagesPaths = {
    turin: require("../images/turin.jpg"),
    dreams: require("../images/test_2.png"),
    echo: require("../images/test4.png"),
    adventure: require("../images/adventure.jpg"),
    cycle: require("../images/test_2.png"),
    trieste: require("../images/test_3.png"),
    copenaghen: require("../images/test_1.png"),
    podcast: require("../images/podcast.png"),
  }

  return (
    <div className='tybearder-postcard'>
        <img src={imagesPaths[image]} className='tybearder-postcard-image'/>
      <div className='tybearder-postcard-text'>
        <h3>{title.toUpperCase()}</h3>
      </div>
    </div>
  )
}

export default Postcard
