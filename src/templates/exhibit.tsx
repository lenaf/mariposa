import React from "react"
import { graphql } from "gatsby"
import Exhibit from "../components/Exhibit"

const ExhibitPage = ({ data }: any) => {
  return <Exhibit exhibit={data.contentfulExhibit} />
}

export const query = graphql`
  query ($id: String!) {
    contentfulExhibit(id: { eq: $id }) {
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
        gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO])
      }
      images {
        title
        gatsbyImageData(width: 1200, placeholder: BLURRED, formats: [AUTO])
      }
    }
  }
`

export default ExhibitPage
