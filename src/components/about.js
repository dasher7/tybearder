import React from "react"
import "../styles/about.css"
import profile from "../images/profile.jpg"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

const About = () => {
  return (
    <div className="wrapper-about">
      <div className="column-about">
        <h1>Hello, I'm Andrea</h1>
                <p className="content-about">
          I am Andrea, 27 y.o. guy from the north of Italy.
          <br />
          <br />
          Welcome to <span id="highlight">Tybearder.</span>
          <br />
          <br />
          What the heck is this?! Let me explain. Let’s begin with the name.
          <br />
          It’s a fusion between typo, beard and reader or writer, it depends on
          the part you will play. In your case, reader.
          <br />
          <br />
          <span className="bold">Why Tybearder?</span>
          <br />
          Well, I found I like to tell stories, and writing it's a superior art
          to express yourself. The name sum up my creativity, and beard is a
          mark to me, since I have a beard since 2010.
          <br />
          <br />
          <span className="bold">What are you going to find here?</span>
          <br />
          Stories about travelling. But travel to me it's not collect magnets,
          it's going beyond myself discovering new things of me and of the
          world. I won't tell you how cool is London, I'll tell you what's
          London hide in itself. I won't tell you the immediate, I'll tell you
          the essence.
          <br />
          <br />
          Plus, you will find some story I created myself, correlated with the
          relative artworks I made along, like a mini graphic novel.
          <br />
          <br />
          You'll find yourself reading about a little headless lego-boy and Old
          Lady, but fear not, there is even more to come. I hope my writing may
          stimulate your imagination, let her fly through you thoughts freely.
          <br />
          <br />
          I guess you understand nothing about this presentation, and that’s
          good, because I now have your curiosity.
          <br />
          <br />
          Hope you enjoy.
          <br />
          <br />
          Yours, <span id="highlight">Andrea</span>
        </p>
      </div>

      <img alt="profile" className="profile-about" src={profile} />
    </div>
  )
}

export default About
