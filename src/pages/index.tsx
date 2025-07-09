import React from "react"

import { graphql, useStaticQuery } from "gatsby";
import Aspen from "./aspen";


const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExhibits {   
          nodes {
            id
            title
            startDate
            endDate
            receptionDate
            location
            information {
              raw
            }
            heroImage {
              title
              file {
                url
              }
            }
            images {
              title
              file {
                url
              }
            }
          }
      }
    }
  `)
  return (
    <Aspen />)
}

export default IndexPage
