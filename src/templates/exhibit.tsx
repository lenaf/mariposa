import React from "react"
import { graphql } from "gatsby"
import type { HeadFC } from "gatsby"
import Exhibit from "../components/Exhibit"
import Seo from "../components/seo"
import { richTextToPlainText } from "../utils/richText"

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
        gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO])
      }
      images {
        title
        gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO])
      }
    }
  }
`

export const Head: HeadFC<{ contentfulExhibit: any }> = ({ data, location }) => {
  const exhibit = data.contentfulExhibit
  const description =
    richTextToPlainText(exhibit.information?.raw) ||
    (exhibit.startDate
      ? `${exhibit.title} at Mariposa Gallery, ${exhibit.startDate} – ${exhibit.endDate || "present"}.`
      : `${exhibit.title} at Mariposa Gallery.`)
  const image = exhibit.heroImage?.gatsbyImageData?.images?.fallback?.src

  return (
    <Seo
      title={`${exhibit.title} | Mariposa Gallery`}
      description={description}
      pathname={location.pathname}
      image={image}
    />
  )
}

export default ExhibitPage
