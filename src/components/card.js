import React from "react"
import "../styles/card.css"
import { Link } from "gatsby"

const Card = ({ index, author, title, desc, path, image }) => {
  // const imagesPaths = {
  //   turin: require("../images/turin.jpg"),
  //   dreams: require("../images/dreams.jpg"),
  //   echo: require("../images/echo.jpg"),
  //   adventure: require("../images/adventure.jpg"),
  //   cycle: require("../images/cycle.jpg"),
  //   trieste: require("../images/trieste.jpeg"),
  //   copenaghen: require("../images/copenaghen.jpeg"),
  //   logo: require('../images/logo_2.png')
  // }

  const imagesPaths = {
    turin: require("../images/turin.jpg"),
    dreams: require("../images/dreams.jpg"),
    echo: require("../images/echo.jpg"),
    adventure: require("../images/adventure.jpg"),
    cycle: require("../images/cycle.jpg"),
    trieste: require("../images/test_3.png"),
    copenaghen: require("../images/test_1.png"),
    logo: require('../images/logo_2.png')
  }

  return (
    <div className='tybearder-blog-list-wrapper'>
      {
        index % 2 === 0 ?
        <div className="tybearder-blog-list-grid">
        <div className='tybearder-blog-list-grid-left'>
          <img className="tybearder-blog-list-image" alt="article cover left" src={imagesPaths[image]}></img>
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
      :
      <div className="tybearder-blog-list-grid">
          <div className='tybearder-blog-list-grid-right'>
            <img className="tybearder-blog-list-image" alt="article cover left" src={imagesPaths[image]}></img>
          </div>
          <div className='tybearder-blog-list-grid-left'>
            <div className='tybearder-blog-list-content'>
              <h2 className='tybearder-blog-list-content-title'>{title.toUpperCase()}</h2>
              <hr className='tybearder-blog-list-content-divider'/>
              <p className='tybearder-blog-list-description'>{desc}</p>
              <Link className='tybearder-blog-list-read-more' to={path}>READ MORE</Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Card
