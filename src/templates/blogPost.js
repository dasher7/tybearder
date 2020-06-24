import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import "../styles/blogpost.css"
import { FaArrowLeft } from "react-icons/fa"
import AboutCard from "../components/aboutCard"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div>
        <h1 className="blog-post-title">{frontmatter.title}</h1>
        <div className="redirect">
          <Link to="/">
            <FaArrowLeft id="highlight" />{" "}
            <span id="indication">Go Back to Blog</span>
          </Link>
        </div>
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div>
        <p className="blog-footer ">
          Posted on {frontmatter.date} by{" "}
          <Link to="/" id="highlight">
            Andrea Bredice
          </Link>
        </p>
        <div className="redirect">
          <Link to="/">
            <FaArrowLeft id="highlight" />{" "}
            <span id="indication">Go Back to Blog</span>
          </Link>
        </div>
      </div>

      <div>
        <AboutCard />
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
