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
      <SEO title="Mariposa Gallery" description="About" />
      <div className="flex md:h-90" >
        <div
          className="flex flex-col justify-center items-center mx-auto my-auto h-100"
          style={{
            width: breakpoints.desktop ? '627px' : '306px',
            height: breakpoints.desktop ? '436px' : '441px',
            background: `url(${breakpoints.desktop ? desktopFrame : mobileFrame})`,
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="font-glaston ">50 Rue de Turenne</div>
          <div className="font-glaston ">Paris 3</div>
          <div>Mercredi - Samedi </div>
          <div>12:00 – 19:00 </div>
          <div>or by appointment </div>
          <div>+33 (0)7 66 53 42 68</div>
          <a href="mailto: info@mariposa.gallery">info@mariposa.gallery</a>
          <Link to='https://www.instagram.com/mariposa.drive/'> @mariposa.drive  </Link>
        </div>
      </div>
    </Layout>)
}

export default About
