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
    <div>
      {data?.allContentfulExhibits?.nodes?.[0]?.title}
      <Green />

    </div>
  )
}

export default IndexPage
