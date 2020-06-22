import React from "react"
import {
  FaMedium,
  FaArtstation,
  FaInstagram,
  FaGithub,
  FaDev,
} from "react-icons/fa"
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="wrapper-contact">
      <h1>Contact me</h1>
      <div className="content-contact">
        <p>
          If you clicked on that beautiful contact link on the navbar, I truly
          hope you wanna say Hello.
          <br />
          <br />I may be introspective but I love social media and have a little
          nice chat from time to time.
          <br />
          <br />
          You'll find me basically on quite all the socials now available, but
          let me first tell you that I have a{" "}
          <a id="highlight" href="https//andreabredice.dev">
            personal site
          </a>
          . <br />
          Minimal, isn't it? Essential, I like to say. But there's almost
          everything you need to know to keep in touch with me and to reach me
          out, if you like it.
          <br />
          <br />
          On{" "}
          <a id="highlight" href="https//andreabredice.dev">
            Medium
          </a>{" "}
          you can find all the story I publish here.
          <br />
          <br />
          On{" "}
          <a id="highlight" href="https//andreabredice.dev">
            ArtStation
          </a>{" "}
          you can find my artworks.
          <br />
          <br />
          On{" "}
          <a id="highlight" href="https//andreabredice.dev">
            Instagram
          </a>{" "}
          you can find photos about my travels and some funny things.
          <br />
          <br />
          On{" "}
          <a id="highlight" href="https//andreabredice.dev">
            GitHub
          </a>{" "}
          you can find all my dev projects, some of them are also interesting.
          <br />
          <br />
          On{" "}
          <a id="highlight" href="https//andreabredice.dev">
            DevTo
          </a>{" "}
          you can find my nerdy tech post, if you wanna get bored, go on.
          <br />
          <br />
          But let's keep it straight, here are all the social useful to keep in
          touch with me:
        </p>
        <ul className="icon">
          <li>
            <FaMedium />
          </li>
          <li>
            <FaArtstation />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaDev />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
