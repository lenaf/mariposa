import React from "react"

import Green from "./green";
import { graphql, useStaticQuery } from "gatsby";


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
  console.log(data)
  return (
    <Green />)
}

export default IndexPage
