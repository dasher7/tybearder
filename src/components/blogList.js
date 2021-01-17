import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"
import Postcard from './postcard'
import '../styles/postcard.css'
import '../styles/sticky.css'
import { FaArtstation, FaInstagram, FaMediumM } from "react-icons/fa"
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import useWindowsDimension from "../hooks/responsiveHook"

const BlogList = () => {

  const { isMobile, isTablet } = useResponsiveDetector()
  const { height, width } = useWindowsDimension()

  console.log('height', height)
  console.log('mobile', isMobile)

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
        data.allMarkdownRemark.edges.length === 0 ?
          <span>loading</span> :
            <>
              <div className='tybearder-main-blog-post'>
                  {
                    !isMobile &&
                    <Card
                    key={1}
                    index={2}
                    author={data.allMarkdownRemark.edges[0].node.frontmatter.author}
                    desc={data.allMarkdownRemark.edges[0].node.frontmatter.desc}
                    image={data.allMarkdownRemark.edges[0].node.frontmatter.image}
                    path={data.allMarkdownRemark.edges[0].node.frontmatter.path}
                    title={data.allMarkdownRemark.edges[0].node.frontmatter.title}
                  />
                  }
              </div>
              <div className='tybearder-postcard-wrapper'>
                {matrix}
              </div>
            </>
      }
    </div>
  )
}

export default BlogList
