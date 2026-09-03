import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import type { HeadFC } from "gatsby"
import Seo from "../components/seo"
import { slugify } from "../utils/slug"

const ArtistsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulArtists(sort: { name: ASC }, filter: { node_locale: { eq: "en-US" } }) {
        nodes {
          id
          name
        }
      }
    }
  `)

  const artists = [...data.allContentfulArtists.nodes].sort((a: any, b: any) => {
    const lastNameA = a.name.split(" ").pop()
    const lastNameB = b.name.split(" ").pop()
    return lastNameA.localeCompare(lastNameB)
  })

  return (
    <ul className="text-xs md:text-15 font-vremena">
      {artists.map((artist: any) => (
        <li key={artist.id} className="mb-2">
          <Link to={`/artist/${slugify(artist.name)}`}>{artist.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export const Head: HeadFC = () => (
  <Seo
    title="Artists | Mariposa Gallery"
    description="Browse all artists represented by Mariposa Gallery."
    pathname="/artists"
  />
)

export default ArtistsPage
