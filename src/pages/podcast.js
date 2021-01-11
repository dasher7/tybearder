import { useStaticQuery } from "gatsby"
import React from "react"
import Card from "../components/card"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Podcast = () => {

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

  return (
    <Layout>
      <SEO title="Tybearder - podcast" />
      <div>
        {data.allMarkdownRemark.edges.map((post, index) => {
          const { author, desc, image, path, title } = post.node.frontmatter
          const key = post.node.id
          return (
            <Card
              key={key}
              index={2}
              author={author}
              desc={desc}
              image={image}
              path={path}
              title={title}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Podcast
