import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import "../styles/blogpost.css"
import { FaArrowLeft } from "react-icons/fa"
import AboutCard from "../components/aboutCard"
import moment from "moment"
import { FormattedMessage } from "react-intl"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className='tybearder-blog-post-background'>
        <div className='tybearder-blog-post-header'>
        <h1 className="tybearder-blog-post-title">{frontmatter.title.toUpperCase()}</h1>
          <Link className='tybearder-blog-post-go-back' to="/">
            <FaArrowLeft id='indication'/>
            <span id="indication"><FormattedMessage id="back_to_blog"/></span>
          </Link>
        </div>  
      <div
        className="tybearder-blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="tybearder-blog-post-content-info">
        <p className="tybearder-blog-post-info-date">
          <FormattedMessage id="posted_on"/> {moment(frontmatter.date).format("MM/DD/YYYY")} by{" "}
          <Link to="/" id='indication'>
            Andrea Bredice
          </Link>
        </p>
        <div className="redirect">
          <Link className='tybearder-blog-post-go-back' to="/">
            <FaArrowLeft id='indication' />
            <span id="indication"><FormattedMessage id="back_to_blog"/></span>
          </Link>
        </div>
      </div>

      <div className='tybearder-blog-post-about-card'>
        <AboutCard />
      </div>
      </div>
    </Layout>
  )
}

export const PageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`
