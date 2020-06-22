import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blogList"

const IndexPage = () => (
  <Layout>
    <SEO title="Tybearder - write, read and grow a beard" />
    <BlogList />
  </Layout>
)

export default IndexPage
