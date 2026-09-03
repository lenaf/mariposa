import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import type { HeadFC } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { slugify } from "../utils/slug"

const ExhibitionsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulExhibit(sort: { startDate: DESC }, filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          id
          title
        }
      }
    }
  `)

  const exhibits = data.allContentfulExhibit.nodes

  return (
    <Layout>
      <ul className="text-xs md:text-15 font-vremena">
        {exhibits.map((exhibit: any) => (
          <li key={exhibit.id} className="mb-2">
            <Link to={`/exhibit/${slugify(exhibit.title)}`}>{exhibit.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head: HeadFC = () => (
  <Seo
    title="Exhibitions | Mariposa Gallery"
    description="Browse current and past exhibitions at Mariposa Gallery."
    pathname="/exhibitions"
  />
)

export default ExhibitionsPage
