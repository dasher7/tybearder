import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"
import Postcard from './postcard'
import '../styles/postcard.css'
import '../styles/sticky.css'
import useResponsiveDetector from "../hooks/useResponsiveDetector"

const BlogList = () => {

  const { isMobile, isTablet, isDesktop } = useResponsiveDetector()

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

  return (
    <div className='tybearder-blog'>
      {
        data.allMarkdownRemark.edges.length === 0 ?
          <span>loading</span> :
            <>
              <div className='tybearder-main-blog-post'>
                  {
                    isDesktop &&
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
                {
                  data.allMarkdownRemark.edges.map( (post, index) => (
                    <Postcard
                      key={index}
                      title={post.node.frontmatter.title}
                      image={post.node.frontmatter.image}
                      path={post.node.frontmatter.path}
                    />
                  ) )
                }
              </div>
            </>
      }
    </div>
  )
}

export default BlogList
