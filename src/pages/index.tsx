import React from "react"

import Green from "./green";
import { graphql, useStaticQuery } from "gatsby";
import Exhibit from "./Exhibit";


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
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO]
              )
            }
            images {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO]
              )
            }
          }
      }
    }
  `)
  console.log(data)
  return (
    <div>
      <Exhibit exhibit={data?.allContentfulExhibits?.nodes?.[0]} />
    </div>
  )
}

export default IndexPage
