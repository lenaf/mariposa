import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { resolveUrl } from "../utils/url"

// Served as-is from /static so it's a real file URL, not a webpack-inlined data URI.
const defaultImage = "/butterfly.png"

type SeoProps = {
  title: string
  description?: string
  pathname?: string
  image?: string
  type?: "website" | "profile" | "article"
  jsonLd?: object | object[]
  noindex?: boolean
}

const Seo = ({
  title,
  description,
  pathname = "",
  image,
  type = "website",
  jsonLd,
  noindex = false,
}: SeoProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          siteUrl
        }
      }
    }
  `)

  const { siteUrl, description: defaultDescription } = site.siteMetadata
  const seoDescription = description || defaultDescription
  const url = resolveUrl(siteUrl, pathname)
  const seoImage = resolveUrl(siteUrl, image || defaultImage)
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seoImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      {jsonLdList.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </>
  )
}

export default Seo
