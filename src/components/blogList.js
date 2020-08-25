import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "./card"

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query BlogPages {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              author
              path
              image
              desc
              date
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allMarkdownRemark.edges.map((post, index) => {
        const { author, desc, image, path, title } = post.node.frontmatter
        const key = post.node.id
        return (
          <Card
            key={key}
            index={index}
            author={author}
            desc={desc}
            image={image}
            path={path}
            title={title}
          />
        )
      })}
    </div>
  )
}

export default BlogList
