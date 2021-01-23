import React from "react"
import "../styles/card.css"
import { Link } from "gatsby"
import Image from "./image"

const Card = ({ index, author, title, desc, path, image }) => {

  // const imagesPaths = {
  //   turin: require("../images/turin.jpg"),
  //   dreams: require("../images/dreams.jpg"),
  //   echo: require("../images/echo.jpg"),
  //   adventure: require("../images/adventure.jpg"),
  //   cycle: require("../images/cycle.jpg"),
  //   trieste: require("../images/test_3.png"),
  //   copenaghen: require("../images/test_1.png"),
  //   podcast: require('../images/podcast.png')
  // }

  return (
    <div className='tybearder-blog-list-wrapper'>
        <div className="tybearder-blog-list-grid">
          <div className='tybearder-blog-list-grid-image'>
            <Image className="tybearder-blog-main-post-image" alt="article cover left" filename={image}/>
            {/* <img className="tybearder-blog-main-post-image" alt="article cover left" src={imagesPaths[image]}></img> */}
          </div>
          <div className='tybearder-blog-list-grid-right'>
            <div className='tybearder-blog-list-content'>
              <h2 className='tybearder-blog-list-content-title'>{title.toUpperCase()}</h2>
              <hr className='tybearder-blog-list-content-divider'/>
              <p className='tybearder-blog-list-description'>{desc}</p>
              <Link className='tybearder-blog-list-read-more' to={path}>READ MORE</Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card
