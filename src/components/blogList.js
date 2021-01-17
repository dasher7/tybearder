import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"
import Postcard from './postcard'
import '../styles/postcard.css'
import '../styles/sticky.css'
import { FaArtstation, FaInstagram, FaMediumM } from "react-icons/fa"
import useResponsiveDetector from "../hooks/useResponsiveDetector"

const BlogList = () => {

  const { isMobile, isTablet } = useResponsiveDetector()

  const data = useStaticQuery(graphql`
    query BlogPages {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tag: { nin: "podcast" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              author
              path
              image
              desc
              tag
              date
            }
          }
        }
      }
    }
  `)

  let matrix = []
  const mapCardsToMatrix = () => {
    const card = data.allMarkdownRemark.edges
    console.log('card', data.allMarkdownRemark.edges.length)
    const cardArray = []
    for (let i = 0; i < card.length; i++) {
      matrix.push(
        <Postcard
          key={i}
          title={card[i].node.frontmatter.title}
          image={card[i].node.frontmatter.image}
        />
      )
      //  if ( i % 3 == 0 ) matrix.push(<br/>)
    }
  }
  mapCardsToMatrix()

  return (
    <div className='tybearder-blog'>

      {
        (!isMobile && !isTablet) &&
          <>
            <div className='test-left'>
              <span className='test-text'>IT</span>
              <span className='test-text'>EN</span>
            </div>
            <div className='test-right'>
              <FaInstagram className='test-icon'/>
              <FaMediumM className='test-icon'/>
              <FaArtstation className='test-icon'/>
            </div>
          </>
      }

      {
        !isMobile ?
          <>
            <div className='tybearder-main-blog-post'>
              <Card
                key={1}
                index={2}
                author={data.allMarkdownRemark.edges[0].node.frontmatter.author}
                desc={data.allMarkdownRemark.edges[0].node.frontmatter.desc}
                image={data.allMarkdownRemark.edges[0].node.frontmatter.image}
                path={data.allMarkdownRemark.edges[0].node.frontmatter.path}
                title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
              />
            </div>
            <div className='tybearder-postcard-wrapper'>
              {matrix}
            </div>
          </> :
          <div className='tybearder-postcard-wrapper-mobile'>
            {
              data.allMarkdownRemark.edges.map( (record, index) => 
                <Postcard
                  key={index}
                  title={record.node.frontmatter.title}
                  image={record.node.frontmatter.image}
                />
               )
            }
          </div>
      }
    </div>
  )
}

export default BlogList
