import { Link } from "gatsby"
import React from "react"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import "../styles/postcard.css"
import "../styles/card.css"
import Image from "./image"

const Postcard = ({ index, author, title, desc, path, image }) => {


  return (
    <div className='tybearder-postcard'>
      <Image className='tybearder-postcard-image' alt='cover' filename={image}/>
      <div className='tybearder-postcard-text'>
        <Link className='tybearder-blog-list-read-more' to={path}>
          <h3>{title.toUpperCase()}</h3>
        </Link>
      </div>
    </div>
  )
}

export default Postcard
