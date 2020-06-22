import React from "react"
import "../styles/card.css"
import { Link } from "gatsby"

const Card = ({ index, author, title, desc, path, image }) => {
  console.log(image)
  const loadedImage = require("../images/turin.jpg")

  const imagesPaths = {
    turin: require("../images/turin.jpg"),
    dreams: require("../images/dreams.jpg"),
    echo: require("../images/echo.jpg"),
    adventure: require("../images/adventure.jpg"),
    cycle: require("../images/cycle.jpg"),
  }

  return (
    <>
      {index % 2 === 0 ? (
        <div className="article-row">
          <div className="article-column">
            <img className="article-img" src={imagesPaths[image]}></img>
          </div>
          <div className="article-column">
            <div className="article-description">
              <h2>{title}</h2>
              <p>{desc}</p>
              <Link to={path}>Read More</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="article-row">
          <div className="article-column">
            <div className="article-description">
              <h2>{title}</h2>
              <p>{desc}</p>
              <Link to={path}>Read More</Link>
            </div>
          </div>
          <div className="article-column">
            <img className="article-img" src={imagesPaths[image]}></img>
          </div>
        </div>
      )}
    </>
  )
}

export default Card

{
  /**
      <div className="article-column">
        <img className="article-img" src={blog}></img>
      </div>
      <div className="article-column">
        <div className="article-description">
          <h2>{title}</h2>
          <p>{desc}</p>
          <a href="/">Read More</a>
        </div>
      </div> */
}
