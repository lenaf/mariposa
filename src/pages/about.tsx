// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import buildingLA from "../images/building-la.png"
import buildingNY from "../images/building-ny.png"

const About = (props: PageProps) => {
  return (
    <Layout>
      <SEO
        title="About - Mariposa Gallery"
        description="Contact and location information for Mariposa Gallery"
      />
      <div className="flex min-h-[calc(100vh-200px)] md:min-h-screen items-center justify-center">
        <div className="max-w-[240px] w-full text-center">
          {/* LA Location */}
          <div className="mb-8">
            <img
              src={buildingLA}
              alt="Mariposa Gallery Los Angeles"
              className="w-full max-w-[220px] mx-auto mb-5"
            />
            <div
              className="font-bigcaslon font-medium text-sm leading-tight"
              style={{ fontFeatureSettings: '"onum" 1' }}
            >
              <p>2700 N Beachwood Drive</p>
              <p>Los Angeles, California</p>
            </div>
          </div>

          {/* NY Location */}
          <div className="mb-24">
            <img
              src={buildingNY}
              alt="Mariposa Gallery New York"
              className="w-full max-w-[220px] mx-auto mb-5"
            />
            <div
              className="font-bigcaslon font-medium text-sm leading-tight"
              style={{ fontFeatureSettings: '"onum" 1' }}
            >
              <p>150 W 28th Street</p>
              <p>New York, New York</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="font-bigcaslon font-medium text-sm leading-tight max-w-[200px]">
            <p className="text-left ml-6">to reach us:</p>
            <p className="text-right">
              <a
                href="mailto:info@mariposa.gallery"
                className="hover:opacity-70 transition-opacity"
              >
                info@mariposa.gallery
              </a>
            </p>
            <p className="text-right">
              <a
                href="https://www.instagram.com/mariposa.drive/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                @mariposa.drive
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
