import React from "react"
import "../styles/card.css"
import blog from "../images/blog.jpg"

const Card = () => {
  return (
    <div className="flex row">
      <div className="half-row">
        <img class="image" src={blog}></img>
      </div>
      <div className="half-row">
        <div style={{ marginTop: "2em" }}>
          <h2>Dreams</h2>
          <p style={{ padding: "0.3em" }}>
            There is one frightened, who speaks softly under his breath. There
            is one forgotten that, banging on every wall, wandering, tries to
            get back on the right path. There is one strong who, screaming in
            the face of others tries to drive them away, so as to remain alone
            in the whole territory, conquering nothingness. There is a small one
            that shines like the full moon on a clear summer night and there is
            one big, cumbersome, colorless, still, it seems almost fake,
            useless.
          </p>
          <br />
          <p style={{ padding: "0.3em" }}>
            There is one frightened, who speaks softly under his breath. There
            is one forgotten that, banging on every wall, wandering, tries to
            get back on the right path. There is one strong who, screaming in
            the face of others tries to drive them away, so as to remain alone
            in the whole territory, conquering nothingness. There is a small one
            that shines like the full moon on a clear summer night and there is
            one big, cumbersome, colorless, still, it seems almost fake,
            useless.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
