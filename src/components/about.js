import React from "react"
import "../styles/about.css"
import profile from "../images/profile_color.png"
import LeafletMap from "./leafletmap" 
import Image from "./image"

const About = () => {

  return (
    <div className='tybearder-about-wrapper'>
      <div className='tybearder-about-image-desc-grid'>
        <div className='tybearder-about-description-image'>
          <Image alt="profile" className="tybearder-about-profile-image" filename={'profile_color.png'}/>
            {/* <img alt="profile" className="tybearder-about-profile-image" src={profile} /> */}
          </div>
          <div className='tybearder-about-description-content'>
            <h1>HELLO, I AM ANDREA</h1>
            <p>
              I am Andrea, 27 y.o. guy from the north of Italy. Welcome to <span id="highlight">Tybearder.</span>
              What the heck is this?! Let me explain. Let’s begin with the name. It’s a fusion between typo, beard and reader or writer, it depends on the part you will play. In your case, reader.
              Well, I found I like to tell stories, and writing it's a superior art to express yourself. The name sum up my creativity, and beard is a mark to me, since I have a beard since 2010.
              Stories about travelling. But travel to me it's not collect magnets, it's going beyond myself discovering new things of me and of the world. I won't tell you how cool is London, I'll tell you what's London hide in itself. I won't tell you the immediate, I'll tell you the essence.
              Plus, you will find some story I created myself, correlated with the relative artworks I made along, like a mini graphic novel.
              You'll find yourself reading about a little headless lego-boy and Old Lady, but fear not, there is even more to come. I hope my writing may stimulate your imagination, let her fly through you thoughts freely.
              I guess you understand nothing about this presentation, and that’s good, because I now have your curiosity.
              Hope you enjoy. 
            </p>
          </div>
      </div>
      <hr className='tybearder-about-divider'/>
      <div className='tybearder-about-map'>
        {typeof window !== 'undefined' &&
          <LeafletMap
            position={[45.8,9.08]}
            zoom={10}
            markerText={"Ciao, attualmente (forse) sono qui :)"}
          />
        }
      </div>
      <hr className='tybearder-about-divider'/>
      <div className='tybearder-about-desc-grid'>
        <div className='tybearder-about-description-content'>
        <p>
          I am really glad you reached here. Do not forget to follow me on social and do not worry: ask me anything that comes up to your mind.
          I'be really happy to know you more. Hope you liked stories and podcast.
        </p>
        </div>
      </div>
    </div>

    // <div className="tybearder-about-wrapper">
    //   <div className='tybearder-about-description-wrapper'>
    //     <div className='tybearder-about-description-image'>
    //       <img alt="profile" className="tybearder-about-profile-image" src={profile} />
    //     </div>
    //     <div className='tybearder-about-description-content'>
    //     <h1>HELLO, I AM ANDREA</h1>
    //     <p>
    //       I am Andrea, 27 y.o. guy from the north of Italy. Welcome to <span id="highlight">Tybearder.</span>
    //       What the heck is this?! Let me explain. Let’s begin with the name. It’s a fusion between typo, beard and reader or writer, it depends on the part you will play. In your case, reader.
    //       Well, I found I like to tell stories, and writing it's a superior art to express yourself. The name sum up my creativity, and beard is a mark to me, since I have a beard since 2010.
    //       Stories about travelling. But travel to me it's not collect magnets, it's going beyond myself discovering new things of me and of the world. I won't tell you how cool is London, I'll tell you what's London hide in itself. I won't tell you the immediate, I'll tell you the essence.
    //       Plus, you will find some story I created myself, correlated with the relative artworks I made along, like a mini graphic novel.
    //       You'll find yourself reading about a little headless lego-boy and Old Lady, but fear not, there is even more to come. I hope my writing may stimulate your imagination, let her fly through you thoughts freely.
    //       I guess you understand nothing about this presentation, and that’s good, because I now have your curiosity.
    //       Hope you enjoy. 
    //     </p>
    //     </div>
    //   </div>
    //   <div className='tybearder-about-map'>
    //     {typeof window !== 'undefined' &&
    //       <LeafletMap
    //         position={[45.8,9.08]}
    //         zoom={10}
    //         markerText={"Ciao, attualmente (forse) sono qui :)"}
    //       />
    //     }
    //   </div>
    //   <div className='tybearder-about-description-content'>
    //     <p>
    //       I am really glad you reached here. Do not forget to follow me on social and do not worry: ask me anything that comes up to your mind.
    //       <br/>
    //       I'be really happy to know you more. Hope you liked stories and podcast.
    //     </p>
    //   </div>
    // </div>
  )
}

export default About
