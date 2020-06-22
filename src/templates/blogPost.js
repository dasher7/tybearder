import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../styles/blogpost.css"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  console.log("html", html)

  return (
    <Layout>
      <div>
        <h1 className="blog-post-title">{frontmatter.title}</h1>
      </div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
