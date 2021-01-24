import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"
import Postcard from './postcard'
import '../styles/postcard.css'
import '../styles/sticky.css'
import useResponsiveDetector from "../hooks/useResponsiveDetector"
import Provider from '../context/Provider'
import {Context} from '../context/Context'

const BlogList = ({lang}) => {

  const { isMobile, isTablet, isDesktop } = useResponsiveDetector()
  const language = localStorage.getItem('lang')


  const data = useStaticQuery(graphql`
    query BlogPages {
      en : allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tag: { nin: "podcast" }, language: { eq: "en" } } }
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
      },
      it: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { tag: { nin: "podcast" }, language: { eq: "it" } } }
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
        language === 'en' ?
            <>
            <div className='tybearder-main-blog-post'>
              {
                isDesktop &&
                <Card
                  key={1}
                  index={2}
                  author={data.en.edges[0].node.frontmatter.author}
                  desc={data.en.edges[0].node.frontmatter.desc}
                  image={data.en.edges[0].node.frontmatter.image}
                  path={data.en.edges[0].node.frontmatter.path}
                  title={data.en.edges[0].node.frontmatter.title}
                />
              }
            </div>
              <div className='tybearder-postcard-wrapper'>
                {
                  data.en.edges.map( (post, index) => (
                    <Postcard
                      key={index}
                      title={post.node.frontmatter.title}
                      image={post.node.frontmatter.image}
                      path={post.node.frontmatter.path}
                    />
                  ) )
                }
              </div>
          </> :
          <>
          <div className='tybearder-main-blog-post'>
            {
              isDesktop &&
              <Card
                key={1}
                index={2}
                author={data.it.edges[0].node.frontmatter.author}
                desc={data.it.edges[0].node.frontmatter.desc}
                image={data.it.edges[0].node.frontmatter.image}
                path={data.it.edges[0].node.frontmatter.path}
                title={data.it.edges[0].node.frontmatter.title}
              />
            }
          </div>
            <div className='tybearder-postcard-wrapper'>
              {
                data.it.edges.map( (post, index) => (
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
