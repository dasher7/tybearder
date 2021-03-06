import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blogList"
import Provider from '../context/Provider'
import {Context} from '../context/Context'

const IndexPage = () => (

  <Layout>
    <SEO title="Scarlatte - caldo da frigorifero" />
    <BlogList />
  </Layout>

)

export default IndexPage
