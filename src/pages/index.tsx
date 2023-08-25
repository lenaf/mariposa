import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Mariposa Gallery" />
    <div>
      <h1>Mariposa</h1>
      <p>Presents our inaugural exhibition,</p>
      <p>Peter Schlesinger: France 1969 - 1979</p>
      <p> Opening October 15, 2023</p>
      <p> at 50 Rue de Turenne, Paris, 3.</p>
    </div>
  </Layout >
)

export default IndexPage
