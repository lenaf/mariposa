import React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutContent from "../components/AboutContent"
import { artGalleryJsonLd } from "../utils/structuredData"

const IndexPage = () => (
  <Layout>
    <AboutContent />
  </Layout>
)

export const Head: HeadFC = () => (
  <Seo
    title="Mariposa Gallery"
    description="Mariposa Gallery is a contemporary art gallery with locations in Los Angeles and New York."
    pathname="/"
    jsonLd={artGalleryJsonLd}
  />
)

export default IndexPage
