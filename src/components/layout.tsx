/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Instagram from "./instagram"

const colorSchemeClass =
  [
    'fill-electricBlue text-electricBlue bg-yellow',
    'fill-lightPink text-lightPink bg-brown',
    'fill-white text-white bg-mutedBlue',
    'fill-red text-red bg-hotPink'
  ][Math.floor(Math.random() * 4)]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className={`${colorSchemeClass} h-screen`}>
        <main className="h-5/6">{children}</main>
        <footer className="font-vremena text-center p-6 ">
          <div >
            info@mariposa.gallery
          </div>
          <div>
            @mariposa.drive
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
