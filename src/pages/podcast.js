import { useStaticQuery } from "gatsby"
import React from "react"
import Card from "../components/card"
import Layout from "../components/layout"
import Postcard from "../components/postcard"
import SEO from "../components/seo"
import useResponsiveDetector from "../hooks/useResponsiveDetector"

const Podcast = () => {

  const { isMobile, isDesktop } = useResponsiveDetector()

  const data = useStaticQuery(graphql`query Podcast {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tag: {eq: "podcast"}}}) {
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
    <Layout>
      <SEO title="Scarlatte - podcast" />

      {
        isDesktop ?
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
    </Layout>
  )
}

export default Podcast
