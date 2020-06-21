import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blogList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BlogList />
  </Layout>
)

export default IndexPage
