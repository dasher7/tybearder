import React from "react"
import "../styles/card.css"
import { Link } from "gatsby"

const Card = ({ index, author, title, desc, path, image }) => {
  const imagesPaths = {
    turin: require("../images/turin.jpg"),
    dreams: require("../images/dreams.jpg"),
    echo: require("../images/echo.jpg"),
    adventure: require("../images/adventure.jpg"),
    cycle: require("../images/cycle.jpg"),
    trieste: require("../images/trieste.jpeg"),
    copenaghen: require("../images/copenaghen.jpeg"),
  }

  return (
    <>
      {index % 2 === 0 ? (
        <div className="article-row">
          <div className="article-column">
            <img
              alt="article cover left"
              className="article-img"
              src={imagesPaths[image]}
            ></img>
          </div>
          <div className="article-column">
            <div className="article-description-wrapper">
              <h2 className="article-title">{title}</h2>
              <p className="article-description">{desc}</p>
              <Link to={path}>Read More</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="article-row">
          <div className="article-column">
            <div className="article-description-wrapper">
              <h2 className="article-title">{title}</h2>
              <p className="article-description">{desc}</p>
              <Link to={path}>Read More</Link>
            </div>
          </div>
          <div className="article-column">
            <img
              alt="article cover right"
              className="article-img"
              src={imagesPaths[image]}
            ></img>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
