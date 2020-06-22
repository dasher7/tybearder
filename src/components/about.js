import React from "react"
import "../styles/about.css"
import profile from "../images/profile.jpg"

const About = () => {
  return (
    <div className="wrapper-about">
      <div className="column-about">
        <h1>Hello, I'm Andrea</h1>
        <p className="content-about">
          I am Andrea, 26 y.o. guy from the north of Italy.
          <br />
          <br />
          Welcome to <span id="highlight">Tybearder.</span>
          <br />
          <br />
          What the heck is this?! Let me explain. Let’s begin with the name.
          <br />
          It’s a fusion between typo, beard and reader or writer, depend of the
          figure you will play, of course I truly hope you can be my reader.
          <br />
          <br />
          Why? Well, it’s a blog, so I type and you read. And the beard? I’ve
          been having a beard since 2010. It’s kind of mark to me.
          <br />
          <br />
          What are you going to find here? You’ll find stories, stories about ..
          dreams, mysterious nameless places all over the world, feelings and so
          more.
          <br />
          <br />
          But let’s be serious. I like writing about places I had visited, not
          in the conventional way. I think every city has its story, an untold
          story. My goal is to tell you what I felt there.
          <br />
          <br />
          Also, my mind like to wander through various paths, and sometimes I
          made up with funny story, like the one of a little plastic lego-boy.
          <br />
          <br />I guess you understand nothing about this presentation, and
          that’s good, because you must read something now!
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
