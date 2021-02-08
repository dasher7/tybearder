import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="Scarlatte - About" />
      <About />
    </Layout>
  )
}

export default about
