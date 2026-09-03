// Gatsby supports TypeScript natively!
import React from "react"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutContent from "../components/AboutContent"
import { artGalleryJsonLd } from "../utils/structuredData"

const About = () => (
  <Layout>
    <AboutContent />
  </Layout>
)

export const Head: HeadFC = () => (
  <Seo
    title="About - Mariposa Gallery"
    description="Contact and location information for Mariposa Gallery"
    pathname="/about"
    jsonLd={artGalleryJsonLd}
  />
)

export default About
