import React from "react"

import Green from "./green";
import { graphql, useStaticQuery } from "gatsby";


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExhibits {   
          nodes {
            title
          }
      }
    }
  `)
  console.log(data)
  return (
    <Green />)
}

export default IndexPage
