import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.title}</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
