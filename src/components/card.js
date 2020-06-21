import React from "react"
import "../styles/card.css"
import blog from "../images/blog.jpg"

const Card = () => {
  return (
    <div className="article-row">
      <div className="article-column">
        <img className="article-img" src={blog}></img>
      </div>
      <div className="article-column">
        <div className="article-description">
          <h2>DREAMS</h2>
          <p>
            There is one frightened, who speaks softly under his breath. There
            is one forgotten that, banging on every wall, wandering, tries to
            get back on the right path. There is one strong who, screaming in
            the face of others tries to drive them away, so as to remain alone
            in the whole territory, conquering nothingness. There is a small one
            that shines like the full moon on a clear summer night and there is
            one big, cumbersome, colorless, still, it seems almost fake,
            useless.
          </p>
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Card
