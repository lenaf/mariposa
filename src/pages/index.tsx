import React from "react"

import { graphql, useStaticQuery } from "gatsby";
import Exhibit from "../components/Exhibit";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExhibit(sort: {startDate: DESC}) {   
          nodes {
            id
            title
            startDate
            endDate
            hours
            receptionDate
            receptionHours
            location {
              raw
            }
            information {
              raw
            }
            press {
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
              title
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

  return (
    <div>
      <Exhibit exhibit={data?.allContentfulExhibit?.nodes?.[0]} />
    </div>
  )
}

export default IndexPage
