// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import mobileFrame from "../images/mobileFrame.png";
import desktopFrame from "../images/desktopFrame.png";

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = (props: PageProps) => {
  const breakpoints = useBreakpoint();
  console.log(breakpoints)
  return (
    <Layout>
      TEST
    </Layout >
  )
}

export default About
